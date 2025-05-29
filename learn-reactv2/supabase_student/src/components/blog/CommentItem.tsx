import { Trash2 } from "lucide-react";
import Avatar from "../ui/Avatar";

export default function CommentItem() {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex gap-4">
        <Avatar
          src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${encodeURIComponent(
            "user"
          )}`}
          alt={"수야"}
          size="sm"
        />
        <div className="flex-1">
          <div className="bg-[#161B22] rounded-lg p-4 mb-2">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="font-medium text-white">수야</span>
                <span className="text-[#8b949e] text-xs ml-2">2025.05.21</span>
              </div>
            </div>
            <p className="text-[#c9d1d9]">내용</p>
          </div>
          <div className="flex gap-4 ml-1">
            <button className="flex items-center text-[#8b949e] hover:text-[#58a6ff] text-sm transition-colors">
              <Trash2 size={14} className="mr-1" />
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
