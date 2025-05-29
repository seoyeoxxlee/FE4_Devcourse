import { MessageSquare } from "lucide-react";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";
import CommentItem from "./CommentItem";

export default function CommentsSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#30363d]">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <MessageSquare className="mr-2" />
        Comments (0)
      </h2>

      <div className="mb-8">
        <form>
          <div className="flex gap-4">
            <Avatar
              src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(
                "user"
              )}`}
              alt={"수야"}
              size="sm"
            />
            <div className="flex-1">
              <textarea
                placeholder="Leave a comment..."
                className="w-full p-3 bg-[#161B22] border border-[#30363d] rounded-lg text-[#c9d1d9] focus:outline-none focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] min-h-[100px] mb-3"
              ></textarea>
              <div className="flex justify-end">
                <Button type="submit">Comment</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* 로그인 안되면 아래 */}
      {/* <div className="bg-[#161B22] border border-[#30363d] rounded-lg p-4 mb-8 text-center">
        <p className="text-[#c9d1d9] mb-3">Please log in to leave a comment</p>
        <Button variant="secondary">Log In</Button>
      </div> */}

      <div>
        <CommentItem />
        {/* 댓글 없으면 */}
        {/* <div className="text-center py-8 text-[#8b949e]">
          <MessageSquare size={36} className="mx-auto mb-3 opacity-50" />
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div> */}
      </div>
    </div>
  );
}
