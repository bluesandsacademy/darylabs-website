"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-9xl font-bold text-[#006fcc]">404</div>
        <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
        <p className="text-gray-600 leading-relaxed">
          The page you're looking for seems to have wandered off. Don't worry, we'll help you find your way back!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/dashboard" className="px-8 py-3 bg-[#006fcc] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Go to Dashboard
          </Link>
          <button onClick={() => window.history.back()} className="px-8 py-3 bg-white text-[#006fcc] font-semibold rounded-lg border-2 border-[#006fcc] hover:bg-blue-50 transition-colors">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
