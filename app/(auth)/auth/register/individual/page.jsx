"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NProgress from "nprogress";
import { countries, genderOptions } from "@/lib/data";
import { registerNewUser } from "@/services/auth-service";
import { toast } from "react-toastify";

export default function RegisterIndividualPage() {
  useEffect(() => {
    document.title = "Create your Account | Darylabs";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", dob: "", gender: "", country: "", password: "", couponCode: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    NProgress.start();
    try {
      await registerNewUser(formData);
      setShowModal(true);
      toast.success("Account created! Check your email for the verification link.");
    } catch (err) {
      if (err.response?.status === 409) toast.warning("User already exists. Try logging in instead.");
      else toast.error("Registration failed. Please check your details and try again.");
    } finally {
      NProgress.done();
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 text-center">
            <h2 className="text-lg font-semibold">Sign Up Successful</h2>
            <p>Please check your email for the verification link.</p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 mx-auto" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      <section className="min-h-screen p-3 mb-10">
        <div className="w-full flex justify-center relative z-0">
          <img src="/images/bg/cover.png" className="w-full object-contain z-0" alt="" />
          <div className="absolute h-full md:h-auto top-1 lg:top-0 flex flex-col justify-center items-center gap-y-0 lg:gap-y-1 md:text-center text-white max-w-lg lg:max-w-none md:bottom-28 bottom-5 space-y-1 lg:space-y-3">
            <img src="/logo-white.png" alt="Darylabs Logo" className="w-auto h-7 lg:h-12 mx-auto" />
            <h1 className="hidden md:flex text-xl md:text-2xl lg:text-4xl font-normal">Create Account</h1>
            <p className="font-thin text-xs lg:text-lg text-center">Join Darylabs and start your STEM journey today.</p>
          </div>
        </div>
        <form className="border max-w-2xl mx-auto flex flex-col gap-y-3 md:gap-y-5 py-5 px-3 md:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white" onSubmit={handleRegister}>
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col w-full gap-y-1 md:gap-y-4">
              <label className="font-medium text-gray-700 text-sm md:text-md">{label}</label>
              <input type={type} name={name} value={formData[name]} onChange={handleChange} required className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
            </div>
          ))}

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Date of Birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base">
              <option value="">Select Gender</option>
              {genderOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Country</label>
            <select name="country" value={formData.country} onChange={handleChange} required className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base">
              <option value="">Select Country</option>
              {countries.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Coupon Code (optional)</label>
            <input type="text" name="couponCode" value={formData.couponCode} onChange={handleChange} className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
          </div>

          <div className="w-full flex flex-col gap-y-3">
            <button type="submit" disabled={isSubmitting} className={`text-center rounded-md py-1 md:py-3 lg:py-5 bg-[#006fcc] text-white w-full text-sm md:text-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}>
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
            <p className="text-gray-500 text-center text-sm md:text-base">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-500 underline font-normal">Sign in</Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
