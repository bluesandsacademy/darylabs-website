"use client";

import { useMutation } from "@tanstack/react-query";
import { registerSchool } from "@/app/actions/register-school";

export function useRegisterSchool() {
  return useMutation({
    mutationFn: async (formData) => {
      const result = await registerSchool(formData);

      if (result.error) {
        throw new Error(result.error.message);
      }

      return result;
    },
  });
}
