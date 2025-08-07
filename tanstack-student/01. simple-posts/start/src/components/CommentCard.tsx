import { useState } from "react";
import { Mail, User, Trash2, AlertTriangle } from "lucide-react";
import type { Comment } from "../types";

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({ comment }: CommentCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      // 삭제
      console.log("삭제");
      setShowConfirm(false);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 relative group">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-blue-600" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-semibold text-slate-900">{comment.name}</h4>
            <div className="flex items-center text-slate-500 text-sm">
              <Mail className="h-3 w-3 mr-1" />
              <span>{comment.email}</span>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed">{comment.body}</p>
        </div>

        {/* Delete Button */}
        <div className="flex-shrink-0">
          <button
            onClick={() => setShowConfirm(true)}
            disabled={isDeleting}
            className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete comment"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Delete Comment
                </h3>
                <p className="text-slate-600 text-sm">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-slate-700 line-clamp-3">
                "{comment.body.substring(0, 100)}..."
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isDeleting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Deleting...</span>
                  </>
                ) : (
                  <>
                    <Trash2 className="h-4 w-4" />
                    <span>Delete</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
