import { useState, useEffect } from "react";
import { api } from "../services/api";
import type { Post, Comment, User } from "../types";
import { User as UserIcon, MessageCircle, ArrowLeft } from "lucide-react";
import { Link, Navigate } from "react-router";
import { useParams } from "react-router";
import CommentCard from "../components/CommentCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchPostData(parseInt(id));
    }
  }, [id]);

  const fetchPostData = async (postId: number) => {
    try {
      setLoading(true);
      const [postData, commentsData] = await Promise.all([
        api.getPost(postId),
        api.getComments(postId),
      ]);

      setPost(postData);
      setComments(commentsData);

      // Fetch user data
      const userData = await api.getUser(postData.userId);
      setUser(userData);
    } catch {
      setError("Failed to load post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!id || isNaN(parseInt(id))) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <LoadingSpinner size="large" text="Loading post..." />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600 font-medium">
            {error || "Post not found"}
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Posts</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Post Header */}
      <article className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="p-8">
          {/* Post Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed text-lg">
              {post.body}
            </p>
          </div>

          {/* Author Info */}
          {/* Sekeleton */}
          {/* <div className="mt-8 pt-6 border-t border-gray-200 animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="h-6 w-6 text-blue-600"></div>
              </div>
              <div className="w-full">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/3 my-1"></div>
                <div className="h-3 bg-gray-200 rounded w-2/4"></div>
              </div>
            </div>
          </div> */}
          {user && (
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{user.name}</h3>
                  <p className="text-slate-500 text-sm">@{user.username}</p>
                  <p className="text-slate-500 text-sm">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Comments Section */}
      <section className="mt-8">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center space-x-2 mb-6">
            <MessageCircle className="h-6 w-6 text-slate-600" />
            <h2 className="text-2xl font-bold text-slate-900">
              Comments ({comments.length})
            </h2>
          </div>

          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <MessageCircle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-medium">No comments yet</p>
              <p className="text-slate-400 text-sm">
                Be the first to share your thoughts
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
