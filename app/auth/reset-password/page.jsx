"use client";

import { Suspense, useEffect, useState } from "react";
import { resetPassword } from "@/services/auth-service";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

function ResetPasswordContent() {
  const [formData, setFormData] = useState({ newPassword: "", confirmPassword: "" });
  const [isLoading, setIsLoading] = useState(false);
  const params = useSearchParams();
  const router = useRouter();
  const tokenParam = params.get("token") || "";

  const passwordMatch =
    formData.newPassword !== "" &&
    formData.confirmPassword !== "" &&
    formData.newPassword === formData.confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) return;
    setIsLoading(true);
    try {
      await resetPassword({ newPassword: formData.newPassword, confirmPassword: formData.confirmPassword, token: tokenParam });
      toast.success("Password changed successfully");
      setFormData({ newPassword: "", confirmPassword: "" });
      router.push("/auth/login");
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen p-3 mb-10">
      <div className="w-full flex justify-center relative z-0">
        <img src="/images/bg/cover.png" className="w-full object-contain z-0" alt="" />
        <div className="absolute text-center text-white max-w-lg md:bottom-36 bottom-5 space-y-3">
          <h1 className="text-2xl md:text-4xl font-normal">Reset Password</h1>
          <p className="font-thin md:text-lg text-sm">Please enter your new password.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="border max-w-2xl mx-auto flex flex-col gap-y-5 py-5 px-5 lg:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700 text-sm">New Password</label>
            <input type="password" name="newPassword" value={formData.newPassword} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} required className="rounded-md border px-3 py-2 md:py-3 w-full text-gray-600" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium text-gray-700 text-sm">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.value})} required className={`rounded-md border px-3 py-2 md:py-3 w-full text-gray-600 ${formData.confirmPassword && !passwordMatch ? "border-red-500" : ""}`} />
            {formData.confirmPassword && !passwordMatch && <p className="text-red-500 text-xs">Passwords do not match</p>}
          </div>
        </div>
        <button type="submit" disabled={!passwordMatch || isLoading} className={`text-center flex justify-center rounded-md py-3 w-full text-white ${!passwordMatch || isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#006fcc] hover:bg-blue-700"}`}>
          {isLoading ? <FaSpinner className="text-xl animate-spin" /> : "Reset Password"}
        </button>
      </form>
    </section>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div></div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
