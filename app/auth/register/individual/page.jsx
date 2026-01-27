"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { countries, genderOptions } from "@/lib/data";
import { useRegisterIndividual } from "@/hooks/use-register-individual";
import { toast } from "react-hot-toast";

export default function RegisterIndividualAccount() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    document.title =
      "Create your Account | Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences";
  }, []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // React Query mutation for registration
  const registerMutation = useRegisterIndividual();

  function handleRememberPassword() {
    setRememberPassword(!rememberPassword);
  }

  const handleModalClose = () => {
    setShowModal(false);
    router.push("/auth/login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    NProgress.start();

    startTransition(async () => {
      try {
        await registerMutation.mutateAsync(formData);
        setShowModal(true);
        toast.success(
          "Registration successful! Please check your email for verification.",
        );
      } catch (error) {
        if (
          error.message.includes("already registered") ||
          error.message.includes("already")
        ) {
          toast.error("Email already registered. Please try logging in.");
        } else if (error.message.includes("email")) {
          toast.error("Please enter a valid email address.");
        } else if (error.message.includes("password")) {
          toast.error("Password must be at least 6 characters long.");
        } else if (
          error.message.includes("age") ||
          error.message.includes("13")
        ) {
          toast.error("You must be at least 13 years old to register.");
        } else {
          toast.error(
            error.message || "Registration failed. Please try again.",
          );
        }
      } finally {
        NProgress.done();
      }
    });
  };

  // Get today's date for max date validation (must be at least 13 years old)
  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate(),
    );
    return maxDate.toISOString().split("T")[0];
  };

  // Get minimum date (100 years ago)
  const getMinDate = () => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate(),
    );
    return minDate.toISOString().split("T")[0];
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 max-w-md">
            <h2 className="text-lg font-semibold text-center mb-4">
              Sign Up Successful! 🎉
            </h2>
            <p className="text-center text-gray-600 mb-4">
              We've sent a verification link to <strong>{email}</strong>. Please
              check your email and click the link to activate your account.
            </p>
            <button
              className="w-full bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-200"
              onClick={handleModalClose}
            >
              Go to Login
            </button>
          </div>
        </div>
      )}

      <section className="min-h-screen p-3 mb-10">
        <div className="w-full flex justify-center relative z-0">
          <img
            src="/images/bg/cover.png"
            className="w-full object-contain z-0"
            alt=""
          />
          <div className="absolute h-full md:h-auto top-1 lg:top-0 flex flex-col justify-center items-center gap-y-0 lg:gap-y-1 md:text-center text-white max-w-lg lg:max-w-none md:bottom-28 bottom-5 space-y-1 lg:space-y-3">
            <img
              src="/images/logo/blue_sands_white.png"
              alt="Logo"
              className="w-auto h-7 lg:h-12 mx-auto"
            />
            <h1 className="hidden md:flex text-xl md:text-2xl lg:text-4xl font-normal">
              Create Your Account
            </h1>
            <p className="font-thin text-xs lg:text-lg max-w-xs md:max-w-lg lg:max-w-none text-center">
              Transforming Education Through Innovation with Cutting-Edge STEM
              Learning Experiences
            </p>
          </div>
        </div>

        <form
          className="border max-w-2xl mx-auto flex flex-col gap-y-3 md:gap-y-5 py-5 px-3 md:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white"
          onSubmit={handleRegister}
        >
          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="fullName"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="fullName"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="emailAddress"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="emailAddress"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="phoneNumber"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="phoneNumber"
              value={phone}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="dob"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              value={dob}
              required
              id="dob"
              min={getMinDate()}
              max={getMaxDate()}
              onChange={(e) => setDob(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              You must be at least 13 years old to register
            </p>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="gender"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Gender
            </label>
            <select
              name="gender"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              {genderOptions.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="country"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Country
            </label>
            <select
              name="country"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Select Country</option>
              {countries.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="password"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-lg"
              id="password"
              value={password}
              minLength={6}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-gray-500">
              Password must be at least 6 characters long
            </p>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="couponCode"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Coupon Code (Optional)
            </label>
            <input
              type="text"
              name="couponCode"
              className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="couponCode"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </div>

          <div className="w-full flex gap-x-3 items-center">
            <input
              type="checkbox"
              className="w-4 h-4 md:w-5 md:h-5"
              id="rememberPassword"
              checked={rememberPassword}
              onChange={handleRememberPassword}
            />
            <label
              htmlFor="rememberPassword"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Remember Password
            </label>
          </div>

          <div className="w-full flex flex-col gap-y-3">
            <button
              type="submit"
              disabled={isPending || registerMutation.isPending}
              className={`text-center rounded-md py-1 md:py-3 lg:py-5 bg-bgBlue text-white w-full text-sm md:text-lg disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isPending || registerMutation.isPending
                ? "Signing Up..."
                : "Sign Up"}
            </button>
            <p className="text-gray-500 text-center text-sm md:text-base">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-500 underline font-normal"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
