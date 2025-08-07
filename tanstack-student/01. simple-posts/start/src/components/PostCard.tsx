import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Post } from "../types";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-slate-200 transition-all duration-300 group">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-slate-600 mb-4 leading-relaxed">
          {truncateText(post.body, 120)}
        </p>

        <Link
          to={`/posts/${post.id}`}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          <span>Read more</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}
