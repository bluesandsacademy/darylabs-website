"use client";

import { useQuery } from "@tanstack/react-query";
import { checkSubdomainAvailability } from "@/app/auth/register-school/actions";

export function useCheckSubdomain(subdomain, enabled = true) {
  return useQuery({
    queryKey: ["subdomain-check", subdomain],
    queryFn: () => checkSubdomainAvailability(subdomain),
    enabled: enabled && subdomain.length > 0,
    staleTime: 30000, // 30 seconds
  });
}
