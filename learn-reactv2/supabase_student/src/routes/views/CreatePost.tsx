import MDEditor from "@uiw/react-md-editor";
import { Tag, X } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { useState, useTransition } from "react";
import supabase from "../../utils/supabase";
import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "react-router";

export default function CreatePost() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const session = useAuthStore((state) => state.session);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter" && tag.trim()) {
      e.preventDefault();
      if (!tags.includes(tag)) {
        setTags((tags) => [...tags, tag.trim()]);
      }
      setTag("");
    }
  };

  const handleTagDelete = (t: string) => {
    setTags((tags) => tags.filter((tag) => tag !== t));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            title,
            content,
            profile_id: session!.user.id,
            tags: tags.join(","),
          },
        ])
        .select();

      if (data) {
        alert("등록되었습니다.");
        navigate("/");
      }

      if (error) {
        alert("에러가 발생했습니다.");
      }
    });
  };
  return (
    <div className="min-h-screen bg-[#0D1117] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-8">Create New Post</h1>

        <form onSubmit={handleSubmit}>
          <div className="bg-[#161B22] rounded-lg border border-[#30363d] p-6 mb-6">
            <Input
              type="text"
              label="Title"
              placeholder="Enter post title"
              fullWidth
              className="mb-6"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Content
              </label>
              <div data-color-mode="dark">
                <MDEditor
                  height={400}
                  preview="edit"
                  value={content}
                  onChange={(value) => setContent(value || "")}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags &&
                  tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center bg-[#21262D] text-[#c9d1d9] px-2 py-1 rounded-full text-sm"
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                      <button
                        type="button"
                        className="ml-1 text-[#8b949e] hover:text-white"
                        onClick={() => handleTagDelete(tag)}
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
              </div>
              <Input
                type="text"
                placeholder="Add tags (press Enter)"
                icon={<Tag size={16} />}
                fullWidth
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={handleAddTag}
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="ghost"
                className="disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="disabled:bg-gray-500 disabled:cursor-not-allowed"
                disabled={isPending}
              >
                Publish Post
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}