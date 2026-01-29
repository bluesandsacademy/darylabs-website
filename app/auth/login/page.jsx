"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { toast } from "react-hot-toast";
import { useLogin } from "@/hooks/use-login";
import { useAuth } from "@/providers/auth-provider";

export default function UserLogin() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { user, isLoading: isAuthLoading, isAuthenticated } = useAuth();

  useEffect(() => {
    document.title =
      "Welcome Back! | Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences";
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // React Query mutation for login
  const loginMutation = useLogin();

  // Redirect if already logged in
  useEffect(() => {
    if (!isAuthLoading && isAuthenticated && user) {
      redirectBasedOnRole(user.role);
    }
  }, [isAuthLoading, isAuthenticated, user, router]);

  const redirectBasedOnRole = (role) => {
    switch (role) {
      case "schoolAdmin":
      case "SchoolAdmin":
        router.push("/school/dashboard");
        break;
      case "globalAdmin":
      case "GlobalAdmin":
        router.push("/admin/dashboard");
        break;
      case "teacher":
      case "Teacher":
        router.push("/teacher/dashboard");
        break;
      case "student":
      default:
        router.push("/dashboard");
        break;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    NProgress.start();

    startTransition(async () => {
      try {
        const result = await loginMutation.mutateAsync(formData);

        toast.success(`Welcome back, ${result.user.fullName}!`);

        // Redirect based on role
        setTimeout(() => {
          redirectBasedOnRole(result.user.role);
        }, 500);
      } catch (error) {
        if (
          error.message.includes("Invalid email") ||
          error.message.includes("Invalid login")
        ) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.message.includes("Email not confirmed")) {
          toast.error("Please verify your email before logging in.");
        } else {
          toast.error(error.message || "Login failed. Please try again.");
        }
      } finally {
        NProgress.done();
      }
    });
  };

  // Show loading state while checking auth
  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

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
              name="email"
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
            <input
              type="password"
              name="password"
              className="rounded-md border px-2 md:px-3 py-1 md:py-3 w-full text-gray-600 text-sm md:text-base"
              id="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
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
              disabled={isPending || loginMutation.isPending}
              className={`text-center rounded-md py-1 md:py-5 bg-primary text-white w-full md:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition`}
            >
              {isPending || loginMutation.isPending ? "Logging in..." : "Login"}
            </button>

            <p className="text-gray-500 text-center text-xs md:text-base">
              Don't have an account?{" "}
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
    </>
  );
}
