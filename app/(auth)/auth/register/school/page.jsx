"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NProgress from "nprogress";
import { countries, workPositions } from "@/lib/data";
import { registerNewSchool } from "@/services/auth-service";
import { toast } from "react-toastify";

const DOMAIN_SUFFIX = ".darylabs.com";
const MAX_DOMAIN_LENGTH = 20;

export default function RegisterSchoolAccount() {
  useEffect(() => {
    document.title = "Create your Account | Darylabs";
  }, []);

  const [formData, setFormData] = useState({
    fullName: "", schoolName: "", email: "", phone: "", position: "",
    totalStudents: "", country: "", password: "", couponCode: "",
  });
  const [subdomainInput, setSubdomainInput] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubdomainChange = (e) => {
    let value = e.target.value.replace(/\s/g, "").toLowerCase();
    if (value.length <= MAX_DOMAIN_LENGTH) {
      setSubdomainInput(value);
      setSubdomain(value.trim() ? value + DOMAIN_SUFFIX : "");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    NProgress.start();
    try {
      await registerNewSchool({ ...formData, subdomain });
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
            <h1 className="hidden md:flex text-xl md:text-2xl lg:text-4xl font-normal">Create Your Account</h1>
            <p className="font-thin text-xs lg:text-lg text-center">Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences</p>
          </div>
        </div>
        <form className="border max-w-2xl mx-auto flex flex-col gap-y-5 py-5 px-3 md:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white" onSubmit={handleRegister}>
          {[
            { label: "Full Name", name: "fullName", type: "text" },
            { label: "School Name", name: "schoolName", type: "text" },
            { label: "School Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "tel" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col w-full gap-y-1 md:gap-y-4">
              <label className="font-medium text-gray-700 text-sm md:text-md">{label}</label>
              <input type={type} name={name} value={formData[name]} onChange={handleChange} required className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
            </div>
          ))}

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Position</label>
            <select name="position" value={formData.position} onChange={handleChange} required className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base">
              <option value="">Select Position</option>
              {workPositions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Total Number of Students</label>
            <input type="number" name="totalStudents" value={formData.totalStudents} onChange={handleChange} required min={0} placeholder="Number of Students" className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Country</label>
            <select name="country" value={formData.country} onChange={handleChange} required className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base">
              <option value="">Select Country</option>
              {countries.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Subdomain</label>
            <div className="relative">
              <input
                type="text"
                value={subdomainInput}
                onChange={handleSubdomainChange}
                placeholder="Enter subdomain"
                maxLength={MAX_DOMAIN_LENGTH}
                className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base pr-40"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm md:text-base">{DOMAIN_SUFFIX}</span>
            </div>
            {subdomain && <p className="text-sm text-gray-600 mt-1">Your domain will be: <span className="font-medium text-blue-600">{subdomain}</span></p>}
            <p className="text-xs text-gray-500">Maximum {MAX_DOMAIN_LENGTH} characters. Only letters, numbers, and hyphens allowed.</p>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label className="font-medium text-gray-700 text-sm md:text-md">Coupon Code (optional)</label>
            <input type="text" name="couponCode" value={formData.couponCode} onChange={handleChange} className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base" />
          </div>

          <div className="w-full flex flex-col gap-y-3">
            <button type="submit" disabled={isSubmitting} className={`text-center rounded-md py-2 md:py-3 lg:py-5 bg-[#006fcc] text-white w-full text-sm md:text-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}>
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
