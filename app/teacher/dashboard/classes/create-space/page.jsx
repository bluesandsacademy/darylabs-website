"use client";

import { addClass } from "@/services/dashboard-service";
import { useUser } from "@/services/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateLearningSpacePage() {
  const { token } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", subject: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.subject) { toast.error("Please fill all fields"); return; }
    setIsSubmitting(true);
    try {
      await addClass(formData, token);
      toast.success("Learning space created!");
      router.push("/teacher/dashboard/classes");
    } catch (err) {
      toast.error("Failed to create learning space");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-xl p-6 shadow-sm max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Create Learning Space</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Class Name</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="border border-gray-200 rounded-md p-2 text-sm" placeholder="e.g. SS2 Physics" required />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Subject</label>
            <input type="text" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="border border-gray-200 rounded-md p-2 text-sm" placeholder="e.g. Physics" required />
          </div>
          <button type="submit" disabled={isSubmitting} className="bg-[#303C48] text-white rounded-md p-2 text-sm disabled:opacity-50">
            {isSubmitting ? "Creating..." : "Create Space"}
          </button>
        </form>
      </div>
    </div>
  );
}
