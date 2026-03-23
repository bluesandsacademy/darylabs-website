"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { toast } from "react-hot-toast";
import { Eye, EyeOff, Loader2, Check, X } from "lucide-react";
import { countries, workPositions } from "@/lib/data";
import { useRegisterSchool } from "@/hooks/use-register-school";
import { useCheckSubdomain } from "@/hooks/use-check-subdomain";

const PasswordStrength = ({ password }) => {
  const rules = [
    { label: "At least 6 characters", pass: password.length >= 6 },
    { label: "Contains a number", pass: /\d/.test(password) },
    { label: "Contains a letter", pass: /[a-zA-Z]/.test(password) },
  ];

  if (!password) return null;

  return (
    <ul className="mt-2 space-y-1">
      {rules.map(({ label, pass }) => (
        <li key={label} className="flex items-center gap-1.5 text-xs">
          {pass ? (
            <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
          ) : (
            <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
          )}
          <span className={pass ? "text-green-600" : "text-gray-400"}>
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default function RegisterSchoolAccount() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    document.title =
      "Create your Account | Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences";
  }, []);

  const [fullName, setFullName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [position, setPosition] = useState("");
  const [totalStudents, setTotalStudents] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [subdomainInput, setSubdomainInput] = useState("");
  const [subdomain, setSubdomain] = useState("");

  const DOMAIN_SUFFIX = ".darylabs.com";
  const MAX_DOMAIN_LENGTH = 20;

  const registerMutation = useRegisterSchool();

  const { data: subdomainCheck, isLoading: isCheckingSubdomain } =
    useCheckSubdomain(subdomain, subdomain.length >= 3);

  const handleSubdomainChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\s/g, "").toLowerCase();

    if (value.length <= MAX_DOMAIN_LENGTH) {
      setSubdomainInput(value);
      if (value.trim()) {
        setSubdomain(value + DOMAIN_SUFFIX);
      } else {
        setSubdomain("");
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!subdomainCheck?.available) {
      toast.error("Please choose an available subdomain");
      return;
    }

    const formData = new FormData(e.target);

    NProgress.start();

    startTransition(async () => {
      try {
        await registerMutation.mutateAsync(formData);
        toast.success("Account created! Please verify your email then log in.");
        router.push("/dashboard");
      } catch (error) {
        if (error.message.includes("already")) {
          toast.error("Email already registered. Please try logging in.");
        } else if (error.message.includes("subdomain")) {
          toast.error("Subdomain is already taken. Please choose another.");
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

  const isSubmitting = isPending || registerMutation.isPending;

  return (
    <>
      <section className="min-h-screen p-3 mb-10">
        <div className="w-full flex justify-center relative z-0">
          <img
            src="/images/bg/cover.png"
            className="w-full object-contain z-0"
            alt=""
          />
          <div className="absolute h-full md:h-auto top-1 lg:top-0 flex flex-col justify-center items-center gap-y-0 lg:gap-y-1 md:text-center text-white max-w-lg lg:max-w-none md:bottom-28 bottom-5 space-y-1 lg:space-y-3">
            <img
              src="/logo.png"
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
          className="border max-w-2xl mx-auto flex flex-col gap-y-5 py-5 px-3 md:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white"
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
              htmlFor="schoolName"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              School Name
            </label>
            <input
              type="text"
              name="schoolName"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="schoolName"
              value={schoolName}
              required
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="emailAddress"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              School Email Address
            </label>
            <input
              type="email"
              name="email"
              className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
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
              className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="phoneNumber"
              value={phone}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="position"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Position
            </label>
            <select
              name="position"
              className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="position"
              value={position}
              required
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Select Position</option>
              {workPositions.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="totalNoOfStudents"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Total Number of Students
            </label>
            <input
              type="number"
              name="totalStudents"
              placeholder="Number of Students"
              className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="totalNoOfStudents"
              min={0}
              value={totalStudents}
              required
              onChange={(e) => setTotalStudents(e.target.value)}
            />
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
              className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="country"
              value={country}
              required
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base pr-10"
                id="password"
                value={password}
                required
                minLength={6}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
            <PasswordStrength password={password} />
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="subdomain"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Subdomain
            </label>
            <div className="relative">
              <input
                type="text"
                name="subdomain"
                className="rounded-md border px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base pr-40"
                id="subdomain"
                value={subdomainInput}
                placeholder="yourschool"
                onChange={handleSubdomainChange}
                maxLength={MAX_DOMAIN_LENGTH}
                required
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">
                {DOMAIN_SUFFIX}
              </span>
            </div>
            {subdomainInput.length >= 3 && (
              <div className="flex items-center gap-1.5 text-sm">
                {isCheckingSubdomain ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-gray-400" />
                    <span className="text-gray-500">Checking availability…</span>
                  </>
                ) : subdomainCheck?.available ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-green-600">
                      <span className="font-medium">{subdomain}</span> is available
                    </span>
                  </>
                ) : (
                  <>
                    <X className="w-3.5 h-3.5 text-red-500" />
                    <span className="text-red-600">
                      <span className="font-medium">{subdomain}</span> is already taken
                    </span>
                  </>
                )}
              </div>
            )}
            <p className="text-xs text-gray-400">
              Max {MAX_DOMAIN_LENGTH} characters. Letters, numbers, and hyphens only.
            </p>
          </div>

          <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
            <label
              htmlFor="couponCode"
              className="font-medium text-gray-700 text-sm md:text-md"
            >
              Coupon Code{" "}
              <span className="text-gray-400 font-normal">(Optional)</span>
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

          <div className="w-full flex flex-col gap-y-1 md:gap-y-3">
            <button
              type="submit"
              disabled={isSubmitting || isCheckingSubdomain}
              className="flex items-center justify-center gap-2 text-sm md:text-base rounded-md py-2 md:py-3 lg:py-5 bg-primary text-white w-full lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Creating Account…
                </>
              ) : (
                "Sign Up"
              )}
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
