import { useState, useEffect, useCallback } from "react";
import type { Post } from "../types";
import { api } from "../services/api";
import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";
import LoadingSpinner from "../components/LoadingSpinner";
import { Search, Filter } from "lucide-react";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const postsPerPage = 12;

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { posts: fetchedPosts, totalCount } = await api.getPosts(
        currentPage,
        postsPerPage
      );
      setPosts(fetchedPosts);
      setTotalCount(totalCount);
    } catch {
      setError("Failed to load posts. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(totalCount / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage, fetchPosts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <LoadingSpinner size="large" text="Loading posts..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={fetchPosts}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Latest Posts</h1>
        <p className="text-slate-600">
          Discover stories, ideas, and insights from our community
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
        <div className="flex items-center space-x-2 text-slate-600">
          <Filter className="h-5 w-5" />
          <span className="text-sm">
            Showing {filteredPosts.length} of {totalCount} posts
          </span>
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length > 0 ? (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : searchTerm ? (
        <div className="text-center py-12">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 max-w-md mx-auto">
            <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-600 font-medium mb-2">No posts found</p>
            <p className="text-slate-500 text-sm">
              Try adjusting your search terms
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-600">No posts available</p>
        </div>
      )}
    </div>
  );
}
