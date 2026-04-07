"use client";

import { useMutation } from "@tanstack/react-query";
import { createClient } from "@/supabase/client";

export function useLogin() {
  return useMutation({
    mutationFn: async (formData) => {
      const supabase = createClient();

      const email = formData.get("email");
      const password = formData.get("password");

      if (!email || !password) {
        throw new Error("Please enter both email and password.");
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(
          error.message === "Invalid login credentials"
            ? "Invalid email or password. Please try again."
            : error.message,
        );
      }

      const userType = data.user?.user_metadata?.user_type;
      let profile = null;
      let role = "student";

      if (userType === "school") {
        const { data: schoolData } = await supabase
          .from("schools")
          .select("*")
          .eq("id", data.user.id)
          .single();

        if (schoolData) {
          profile = schoolData;
          role = "schoolAdmin";
        }
      } else if (userType === "individual") {
        const { data: individualData } = await supabase
          .from("individuals")
          .select("*")
          .eq("id", data.user.id)
          .single();

        if (individualData) {
          profile = individualData;
          role = "student";
        }
      }

      return {
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email,
          fullName:
            profile?.full_name || data.user.user_metadata?.full_name || "User",
          role,
          userType,
          profile,
        },
        session: data.session,
      };
    },
  });
}
