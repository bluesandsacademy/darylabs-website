"use client";

import { useEffect, useState } from "react";
import { forgotPassword } from "@/services/auth-service";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Reset Password | Darylabs";
  }, []);

  function isValidEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) { toast.error("Invalid email address"); return; }
    setIsLoading(true);
    try {
      await forgotPassword({ email });
      toast.success("Request sent. Check your mail for reset link");
      setEmail("");
    } catch (error) {
      toast.error("Failed to send request. Please try again.");
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
          <p className="font-thin md:text-lg text-sm">Please enter your email to receive a reset link.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="border max-w-2xl mx-auto flex flex-col gap-y-5 py-5 px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white">
        <div className="flex flex-col w-full gap-y-4">
          <label htmlFor="emailAddress" className="font-medium text-gray-700 text-md">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border px-3 py-3 w-full text-gray-600"
            id="emailAddress"
            required
          />
        </div>
        <button
          type="submit"
          disabled={!email || isLoading}
          className={`text-center flex justify-center rounded-md py-3 w-full text-lg text-white ${!email || isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#006fcc] hover:bg-blue-700"}`}
        >
          {isLoading ? <FaSpinner className="text-xl animate-spin" /> : "Reset Password"}
        </button>
      </form>
    </section>
  );
}
