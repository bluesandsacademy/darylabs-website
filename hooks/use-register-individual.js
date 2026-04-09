"use client";

import { useMutation } from "@tanstack/react-query";
import { registerNewUser } from "@/services/auth-service";

export function useRegisterIndividual() {
  return useMutation({
    mutationFn: async (formData) => {
      const payload = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        dob: formData.get("dob"),
        gender: formData.get("gender"),
        country: formData.get("country"),
        password: formData.get("password"),
        couponCode: formData.get("couponCode") || null,
      };

      return await registerNewUser(payload);
    },
  });
}
