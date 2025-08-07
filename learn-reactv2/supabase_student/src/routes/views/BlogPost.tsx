import { ArrowLeft } from "lucide-react";
import BlogContent from "../../components/blog/BlogContent";
import CommentsSection from "../../components/blog/CommentsSection";
import { useLoaderData, useNavigate } from "react-router";
import { fetchPostDetail } from "../loader/post.loader";
import Button from "../../components/ui/Button";
import { useOptimistic, useState, useTransition } from "react";
import { useAuthStore } from "../../stores/authStore";
import supabase from "../../utils/supabase";

export type PostsDetail = NonNullable<
  Awaited<ReturnType<typeof fetchPostDetail>>
>;
export default function BlogPost() {
  const navigate = useNavigate();
  const session = useAuthStore((state) => state.session);
  const post = useLoaderData<PostsDetail>();
  const [comments, setComments] = useState(post.comments);

  // [..., ...., ...., ...., {}, ...]
  // []
  const [optimisticComments, addOptimisticComments] = useOptimistic<
    PostsDetail["comments"],
    PostsDetail["comments"][number]
  >(comments, (state, value) => [...state, value]);

  const [isPending, startTransition] = useTransition();
  const handleCommentAdd = async (comment: string) => {
    if (!comment.trim()) return;
    if (!session?.user.id) {
      alert("로그인 후 등록 가능합니다.");
      return;
    }
    addOptimisticComments({
      id: Date.now(),
      comment,
      profile_id: session?.user.id,
      created_at: new Date().toISOString(),
      post_id: Number(post.id),
      profiles: {
        id: session?.user.id,
        username: session?.user.user_metadata.name,
        avatar_url: session?.user.user_metadata.avatar_url,
      },
    });

    startTransition(async () => {
      // await new Promise((resolve) => setTimeout(resolve, 5000)); // 5
      const { data } = await supabase
        .from("comments")
        .insert([
          { profile_id: session?.user.id, post_id: Number(post.id), comment },
        ])
        .select(
          `
          *, 
          profiles (
            id, 
            username, 
            avatar_url
          )
          `
        )
        .single();
      startTransition(() => {
        setComments((comments) => [
          ...comments,
          data as PostsDetail["comments"][number],
        ]);
      });
    });
  };

  const handleDeleteComment = async (id: number) => {
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (!error)
      setComments((comments) =>
        comments.filter((comment) => comment.id !== id)
      );
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          className="flex items-center text-[#58a6ff] hover:underline transition-colors"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to posts
        </button>
      </div>

      {/* Blog Content */}
      <BlogContent {...post} />

      {/* Comments Section */}
      <CommentsSection
        comments={optimisticComments}
        handleCommentAdd={handleCommentAdd}
        handleDeleteComment={handleDeleteComment}
        isPending={isPending}
      />
    </div>
  );
}
