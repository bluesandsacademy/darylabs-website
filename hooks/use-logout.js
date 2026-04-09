"use client";

import { useUser } from "@/services/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function useLogout() {
  const { logout } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    try {
      logout();
      toast.success("Logged out successfully");
      router.push("/auth/login");
    } catch (error) {
      toast.error("Error logging out");
      console.error("Logout error:", error);
    }
  };

  return { logout: handleLogout };
}
