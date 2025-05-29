import { ArrowLeft } from "lucide-react";
import BlogContent from "../../components/blog/BlogContent";
import CommentsSection from "../../components/blog/CommentsSection";

export default function BlogPost() {
  // return (
  //   <div className="min-h-screen bg-[#0D1117] flex items-center justify-center">
  //     <div className="text-center">
  //       <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
  //       <Button variant="secondary">Back to Home</Button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button className="flex items-center text-[#58a6ff] hover:underline transition-colors">
          <ArrowLeft size={16} className="mr-1" />
          Back to posts
        </button>
      </div>

      {/* Blog Content */}
      <BlogContent />

      {/* Comments Section */}
      <CommentsSection />
    </div>
  );
}
