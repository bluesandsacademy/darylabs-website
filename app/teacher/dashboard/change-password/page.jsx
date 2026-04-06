"use client";
import { changePassword } from "@/services/auth-service";
import { useUser } from "@/services/UserContext";
import { useState } from "react";
import { toast } from "react-toastify";

export default function TeacherChangePasswordPage() {
  const { token } = useUser();
  const [formData, setFormData] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) { toast.error("Passwords do not match"); return; }
    setIsSubmitting(true);
    try {
      await changePassword(formData, token);
      toast.success("Password changed successfully");
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to change password");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white rounded-xl p-6 shadow-sm max-w-lg">
        <h2 className="text-lg font-semibold mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {[["Current Password","currentPassword"],["New Password","newPassword"],["Confirm New Password","confirmPassword"]].map(([label, name]) => (
            <div key={name} className="flex flex-col gap-1">
              <label className="text-sm font-medium">{label}</label>
              <input type="password" name={name} value={formData[name]} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} required className="border border-gray-200 rounded-md p-2 text-sm" />
            </div>
          ))}
          <button type="submit" disabled={isSubmitting} className="bg-[#303C48] text-white rounded-md p-2 text-sm disabled:opacity-50">
            {isSubmitting ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
