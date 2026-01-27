"use client";

import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/app/actions/login";

export function useLogin() {
  return useMutation({
    mutationFn: async (formData) => {
      const result = await loginUser(formData);

      if (result.error) {
        throw new Error(result.error.message);
      }

      return result;
    },
  });
}
