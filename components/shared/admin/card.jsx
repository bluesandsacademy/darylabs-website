// components/admin/BlogPostCard.jsx
"use client";

import Image from "next/image";
import { useState } from "react";
import DeleteConfirmModal from "./delete-post";
import ViewPostModal from "./view-post";

export default function BlogPostCard({ post }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const handleEdit = () => {
    window.location.href = `/admin/blog/edit/${post.id}`;
  };

  const handleDelete = () => {
    console.log("Deleting post:", post.id);
  };

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
        {/* Image - Clickable to view */}
        <div
          className="relative aspect-video bg-gray-100 cursor-pointer group"
          onClick={() => setShowViewModal(true)}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* View overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Author and Date */}
          <div className="flex items-center gap-2 text-sm text-primary">
            <span className="font-medium">{post.author}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{post.date}</span>
          </div>

          {/* Title - Clickable to view */}
          <h3
            className="text-lg font-semibold text-gray-900 line-clamp-2 cursor-pointer hover:text-primary transition-colors"
            onClick={() => setShowViewModal(true)}
          >
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 line-clamp-2">
            {post.description}
          </p>

          {/* Status and Actions */}
          <div className="flex items-center justify-between pt-2">
            {/* Status Badge */}
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                post.status === "published"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {post.status === "published" ? "Published" : "Draft"}
            </span>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* View Button */}
              <button
                onClick={() => setShowViewModal(true)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                title="View post"
              >
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>

              {/* Edit Button */}
              <button
                onClick={handleEdit}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Edit post"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>

              {/* Delete Button */}
              <button
                onClick={() => setShowDeleteModal(true)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete post"
              >
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* View Post Modal */}
      <ViewPostModal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        post={post}
        onEdit={handleEdit}
        onDelete={() => setShowDeleteModal(true)}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        itemName={post.title}
      />
    </>
  );
}
