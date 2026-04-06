"use client";

import { useAuth } from "@/lib/providers/auth-provider";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function useLogout() {
  const { signOut } = useAuth();
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      router.push("/auth/login");
    } catch (error) {
      toast.error("Error logging out");
      console.error("Logout error:", error);
    }
  };

  return { logout };
}
