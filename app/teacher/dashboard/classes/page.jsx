"use client";

import { getClasses } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CardGridSkeleton } from "@/components/ui/Skeleton";
import { FaPlus } from "react-icons/fa";
import { BsBook } from "react-icons/bs";

export default function TeacherClassesPage() {
  const { token } = useUser();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchClasses() {
      try {
        const data = await getClasses(token);
        setClasses(data || []);
      } catch (err) {
        console.error("Error fetching classes:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchClasses();
  }, [token]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center bg-white rounded-md p-3">
        <div>
          <p className="text-base lg:text-lg font-semibold">Class Management</p>
          <p className="text-xs text-gray-500">Manage your classes and learning spaces</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/teacher/dashboard/classes/learning-space")}
            className="bg-white border border-gray-300 text-gray-700 text-xs px-3 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1.5"
          >
            <BsBook className="text-sm" /> My Learning Spaces
          </button>
          <button
            onClick={() => router.push("/teacher/dashboard/classes/create-space")}
            className="bg-[#303C48] text-white text-xs px-3 py-2 rounded-md flex items-center gap-1.5"
          >
            <FaPlus /> Create Learning Space
          </button>
        </div>
      </div>

      {loading ? (
        <CardGridSkeleton count={3} />
      ) : classes.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center text-gray-500 text-sm space-y-3">
          <p>No classes yet. Create your first learning space.</p>
          <button
            onClick={() => router.push("/teacher/dashboard/classes/create-space")}
            className="inline-flex items-center gap-1.5 bg-[#303C48] text-white text-xs px-3 py-2 rounded-md"
          >
            <FaPlus /> Create Learning Space
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-semibold">{cls.name}</p>
              <p className="text-xs text-gray-500">{cls.subject}</p>
              <div className="flex items-center gap-3 mt-2">
                <Link
                  href={`/teacher/dashboard/classes/view-space/${cls.id}`}
                  className="text-xs text-blue-600 hover:underline"
                >
                  View space →
                </Link>
                <Link
                  href={`/teacher/dashboard/classes/edit-space/${cls.id}`}
                  className="text-xs text-gray-500 hover:underline"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
