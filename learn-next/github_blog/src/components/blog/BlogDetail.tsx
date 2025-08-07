"use client";

import { ArrowLeft } from "lucide-react";
import BlogContent from "./BlogContent";
import CommentsSection from "./CommentsSection";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { fetchPostDetail } from "@/lib/api/post.api";
import { useOptimistic, useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";

export type PostsDetail = NonNullable<
  Awaited<ReturnType<typeof fetchPostDetail>>
>;
export default function BlogDetail({ post }: { post: PostsDetail }) {
  const router = useRouter();
  const { user } = useAuth();
  const [comments, setComments] = useState<PostsDetail["comments"]>(
    post.comments
  );
  const [optimisticComments, addOptimisticComments] = useOptimistic<
    PostsDetail["comments"],
    PostsDetail["comments"][number]
  >(comments, (state, value) => [...state, value]);
  const [isPending, startTransition] = useTransition();
  const handleCommentAdd = async (comment: string) => {
    if (!comment.trim()) return;
    if (!user?.id) {
      alert("로그인 후 등록 가능합니다.");
      return;
    }
    addOptimisticComments({
      id: Date.now(),
      comment,
      profile_id: user?.id,
      created_at: new Date().toISOString(),
      post_id: Number(post.id),
      profiles: {
        id: user?.id,
        username: user?.user_metadata.name,
        avatar_url: user?.user_metadata.avatar_url,
      },
    });

    startTransition(async () => {
      const supabase = createClient();
      const { data } = await supabase
        .from("comments")
        .insert([{ profile_id: user?.id, post_id: Number(post.id), comment }])
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
    const supabase = createClient();
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (!error)
      setComments((comments) =>
        comments.filter((comment) => comment.id !== id)
      );
  };

  return (
    <>
      <div className="min-h-screen bg-[#0D1117]">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            className="flex items-center text-[#58a6ff] hover:underline transition-colors"
            onClick={() => router.back()}
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
    </>
  );
}
