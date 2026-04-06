"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "./UserContext";
import { resendVerification } from "./auth-service";
import { toast } from "react-toastify";
import NProgress from "nprogress";

const AuthGuard = ({ children }) => {
  const { user, isLoggedIn, token, isInitialized, logout } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const publicRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/verify-email",
    "/",
    "/auth/verify-success",
    "/auth/reset-password",
  ];

  const noVerificationRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/verify-email",
    "/",
    "/auth/verify-success",
    "/admin/dashboard",
    "/teacher/dashboard",
  ];

  const getDashboardRoute = (userRole) => {
    if (userRole === "schoolAdmin" || userRole === "SchoolAdmin") {
      return "/school/dashboard";
    } else if (userRole === "globalAdmin" || userRole === "GlobalAdmin") {
      return "/admin/dashboard";
    } else if (userRole === "teacher" || userRole === "Teacher") {
      return "/teacher/dashboard";
    }
    return "/dashboard";
  };

  const handleRequestVerification = async () => {
    NProgress.start();
    try {
      if (!user?.email) {
        toast.error("Email not found. Please try logging in again.");
        return;
      }
      await resendVerification(user?.email);
      toast.success("Verification email sent! Please check your email inbox.");
      NProgress.done();
    } catch (error) {
      console.error("Error sending verification email:", error);
      toast.error("Failed to send verification email. Please try again.");
      NProgress.done();
    }
  };

  const handleLogout = () => {
    NProgress.start();
    logout();
    router.push("/auth/login");
    NProgress.done();
  };

  useEffect(() => {
    if (!isInitialized) return;

    const isPublicRoute = publicRoutes.some((route) => {
      if (route === "/") return pathname === "/";
      return pathname.startsWith(route);
    });

    const requiresVerification = !noVerificationRoutes.some((route) => {
      if (route === "/") return pathname === "/";
      return pathname.startsWith(route);
    });

    if (!isLoggedIn && !token && !isPublicRoute) {
      router.replace("/auth/login");
      return;
    }

    if (isLoggedIn && token && user && !user.isVerified && requiresVerification) {
      setIsLoading(false);
      return;
    }

    if (
      isLoggedIn &&
      token &&
      pathname.startsWith("/auth/") &&
      !pathname.startsWith("/auth/verify-email")
    ) {
      const dashboardRoute = getDashboardRoute(user?.role);
      router.replace(dashboardRoute);
      return;
    }

    if (isLoggedIn && token && user && user.isVerified) {
      if (
        (user.role === "student" || user.role === "Student") &&
        (pathname.startsWith("/school/") ||
          pathname.startsWith("/admin/") ||
          pathname.startsWith("/teacher"))
      ) {
        router.replace("/dashboard");
        return;
      }

      if (
        (user.role === "schoolAdmin" || user.role === "SchoolAdmin") &&
        (pathname.startsWith("/teacher/") ||
          pathname.startsWith("/admin/") ||
          pathname === "/dashboard")
      ) {
        router.replace("/school/dashboard");
        return;
      }

      if (
        (user.role === "teacher" || user.role === "Teacher") &&
        (pathname.startsWith("/school/") ||
          pathname.startsWith("/admin/") ||
          pathname === "/dashboard")
      ) {
        router.replace("/teacher/dashboard");
        return;
      }

      if (
        (user.role === "globalAdmin" || user.role === "GlobalAdmin") &&
        (pathname.startsWith("/school/") ||
          pathname.startsWith("/teacher/") ||
          pathname === "/dashboard")
      ) {
        router.replace("/admin/dashboard");
        return;
      }
    }

    setIsLoading(false);
  }, [isLoggedIn, token, pathname, router, isInitialized, user?.role, user?.isVerified]);

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window === "undefined") return;
      const currentToken = localStorage.getItem("token");
      const currentIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      if (!currentToken || !currentIsLoggedIn) {
        const isPublicRoute = publicRoutes.some((route) => {
          if (route === "/") return window.location.pathname === "/";
          return window.location.pathname.startsWith(route);
        });
        if (!isPublicRoute) {
          router.replace("/auth/login");
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handlePopState);
      return () => window.removeEventListener("popstate", handlePopState);
    }
  }, [router]);

  if (isLoading || !isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (
    isLoggedIn &&
    user &&
    !user.isVerified &&
    !noVerificationRoutes.some((route) => {
      if (route === "/") return pathname === "/";
      return pathname.startsWith(route);
    })
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white flex flex-col p-8 items-center rounded-lg shadow-lg text-center max-w-md">
          <div className="mb-6">
            <img
              src="/logo.png"
              alt="Darylabs Logo"
              className="w-auto h-[80px] mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Email Verification Required
            </h2>
            <p className="text-gray-600 mb-6">
              Your email has not been verified. Please click on the verification
              link sent to your email, or request a new verification email below.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Email: <span className="font-medium">{user.email}</span>
            </p>
          </div>
          <button
            onClick={handleRequestVerification}
            className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Request New Verification Email
          </button>
          <button
            className="text-blue-600 bg-slate-300 rounded-md px-2 mt-6 border border-blue-500"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
