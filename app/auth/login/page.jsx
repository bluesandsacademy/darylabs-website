"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { toast } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { login } from "@/services/auth-service";
import { useUser } from "@/services/UserContext";

export default function UserLogin() {
  const router = useRouter();
  const { user, isLoggedIn, setUser, setToken } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title =
      "Welcome Back! | Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences";
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn && user) {
      redirectBasedOnRole(user.role);
    }
  }, [isLoggedIn, user]);

  const redirectBasedOnRole = (role) => {
    const r = role?.toLowerCase();
    if (r === "schooladmin") router.push("/school/dashboard");
    else if (r === "globaladmin") router.push("/admin/dashboard");
    else if (r === "teacher") router.push("/teacher/dashboard");
    else router.push("/dashboard");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    NProgress.start();

    try {
      const { user: loggedInUser, token } = await login(email, password);
      setUser(loggedInUser);
      setToken(token);
      toast.success(`Welcome back, ${loggedInUser.fullName}!`);
      redirectBasedOnRole(loggedInUser.role);
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error("Invalid email or password. Please try again.");
      } else {
        toast.error("Login failed. Please try again later.");
      }
    } finally {
      NProgress.done();
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen p-3 mb-10">
      <div className="w-full flex justify-center relative z-0">
        <img
          src="/images/bg/cover.png"
          className="w-full object-contain z-0"
          alt=""
        />
        <div className="absolute h-full md:h-auto top-1 lg:top-0 flex flex-col justify-center items-center gap-y-0 lg:gap-y-1 md:text-center text-white max-w-lg lg:max-w-none md:bottom-28 bottom-5 space-y-1 lg:space-y-3">
          <img
            src="/logo-white.png"
            alt="Darylabs Logo"
            className="w-auto h-7 lg:h-12 mx-auto"
          />
          <h1 className="hidden md:flex text-xl md:text-2xl lg:text-4xl font-normal">
            Welcome Back!
          </h1>
          <p className="font-thin text-xs lg:text-lg max-w-xs md:max-w-lg lg:max-w-none text-center">
            Transforming Education Through Innovation with Cutting-Edge STEM
            Learning Experiences
          </p>
        </div>
      </div>

      <form
        className="border max-w-2xl mx-auto flex flex-col gap-y-3 md:gap-y-5 py-5 px-3 md:px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col w-full gap-y-1 md:gap-y-4">
          <label
            htmlFor="emailAddress"
            className="font-medium text-gray-700 text-sm md:text-md"
          >
            Email Address
          </label>
          <input
            type="email"
            className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
            value={email}
            required
            id="emailAddress"
            onChange={(e) => setEmail(e.target.value)}
          />
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
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base pr-10"
              id="password"
              value={password}
              required
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
        </div>

        <div className="w-full flex flex-col gap-y-3">
          <Link
            href="/auth/forgot-password"
            className="text-gray-500 text-sm md:text-md font-normal text-center hover:text-blue-600 transition"
          >
            Forgot Password?
          </Link>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-center rounded-md py-1 md:py-5 bg-primary text-white w-full md:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="text-gray-500 text-center text-xs md:text-base">
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-blue-500 underline font-normal hover:text-blue-700 transition"
            >
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
}
