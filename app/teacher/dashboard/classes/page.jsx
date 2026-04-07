"use client";

import { getClasses } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TeacherClassesPage() {
  const { token } = useUser();
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <p className="text-xs text-gray-500">Manage your learning spaces</p>
        </div>
        <Link href="/teacher/dashboard/classes/create-space" className="bg-[#303C48] text-white text-xs px-3 py-2 rounded-md">
          + Create Space
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : classes.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center text-gray-500 text-sm">
          No classes yet. Create your first learning space.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((cls, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
              <p className="font-semibold">{cls.name}</p>
              <p className="text-xs text-gray-500">{cls.subject}</p>
              <Link href={`/teacher/dashboard/classes/view-space/${cls.id}`} className="text-xs text-blue-600 mt-2 inline-block">View →</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
