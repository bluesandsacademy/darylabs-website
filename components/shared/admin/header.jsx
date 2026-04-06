// components/admin/AdminHeader.jsx
"use client";

import { useState } from "react";
import NewPostModal from "./new-post";

export default function AdminHeader({ setSidebarOpen, title }) {
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200 h-16">
        <div className="flex items-center justify-between h-full px-4 lg:px-8">
          {/* Left side - Mobile menu button + Title */}
          <div className="flex items-center gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Title */}
            <h1 className="text-lg md:text-xl font-semibold text-gray-900">
              {title}
            </h1>
          </div>

          {/* Right side - Add New Post button */}
          <button
            onClick={() => setShowNewPostModal(true)}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="hidden sm:inline">Add New Post</span>
            <span className="sm:hidden">Add</span>
          </button>
        </div>
      </header>

      {/* New Post Modal */}
      <NewPostModal
        isOpen={showNewPostModal}
        onClose={() => setShowNewPostModal(false)}
      />
    </>
  );
}
