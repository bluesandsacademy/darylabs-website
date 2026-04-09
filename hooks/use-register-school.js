"use client";

import { useMutation } from "@tanstack/react-query";
import { registerNewSchool } from "@/services/auth-service";

export function useRegisterSchool() {
  return useMutation({
    mutationFn: async (formData) => {
      const payload = {
        fullName: formData.get("fullName"),
        schoolName: formData.get("schoolName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        totalStudents: formData.get("totalStudents"),
        country: formData.get("country"),
        subdomain: formData.get("subdomain"),
        password: formData.get("password"),
        couponCode: formData.get("couponCode") || null,
      };

      return await registerNewSchool(payload);
    },
  });
}
