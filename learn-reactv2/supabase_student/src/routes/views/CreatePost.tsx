import MDEditor from "@uiw/react-md-editor";
import { Tag } from "lucide-react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function CreatePost() {
  return (
    <div className="min-h-screen bg-[#0D1117] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-8">Create New Post</h1>

        <form>
          <div className="bg-[#161B22] rounded-lg border border-[#30363d] p-6 mb-6">
            <Input
              type="text"
              label="Title"
              placeholder="Enter post title"
              fullWidth
              className="mb-6"
            />

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Content
              </label>
              <div data-color-mode="dark">
                <MDEditor height={400} preview="edit" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#c9d1d9] mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2"></div>
              <Input
                type="text"
                placeholder="Add tags (press Enter)"
                icon={<Tag size={16} />}
                fullWidth
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
              <Button type="submit">Publish Post</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
