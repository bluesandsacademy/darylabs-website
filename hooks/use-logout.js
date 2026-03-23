"use client";

import { useAuth } from "@/providers/auth-provider";
import { toast } from "react-hot-toast";

export function useLogout() {
  const { signOut } = useAuth();

  const logout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      window.location.href = "/auth/login";
    } catch (error) {
      toast.error("Error logging out");
      console.error("Logout error:", error);
    }
  };

  return { logout };
}
