"use client";

import { useMutation } from "@tanstack/react-query";
import { registerIndividual } from "@/app/actions/register-individual";

export function useRegisterIndividual() {
  return useMutation({
    mutationFn: async (formData) => {
      const result = await registerIndividual(formData);

      if (result.error) {
        throw new Error(result.error.message);
      }

      return result;
    },
  });
}
