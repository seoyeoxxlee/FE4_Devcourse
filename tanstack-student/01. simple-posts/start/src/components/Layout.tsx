import React from "react";
import { BookOpen, Home, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isPostDetail = location.pathname.startsWith("/posts/");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <div className="p-2 bg-blue-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SimpleBlog</h1>
                <p className="text-xs text-slate-500">Stories & Ideas</p>
              </div>
            </Link>

            <nav className="flex items-center space-x-4">
              {isPostDetail && (
                <Link
                  to="/"
                  className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back to Posts</span>
                </Link>
              )}
              <Link
                to="/"
                className="flex items-center space-x-2 px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-500">
            <p className="text-sm">
              © 2025 SimpleBlog. Built with React & JSONPlaceholder API.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
