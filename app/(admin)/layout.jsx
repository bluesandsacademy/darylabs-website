// app/admin/blog/layout.jsx
"use client";
import "../globals.css";
import { useState } from "react";
import AdminSidebar from "@/components/shared/admin/sidebar";
import AdminHeader from "@/components/shared/admin/header";

export default function AdminBlogLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-50 flex">
          {/* Sidebar */}
          <AdminSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-h-screen lg:pl-64">
            {/* Header */}
            <AdminHeader
              setSidebarOpen={setSidebarOpen}
              title="Blog Management"
            />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
        </div>
      </body>
    </html>
  );
}
