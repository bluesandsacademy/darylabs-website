"use client";

// Subdomain availability is validated server-side on registration submit.
// This hook returns a static result so the UI check indicator is removed gracefully.
export function useCheckSubdomain(_subdomain, _enabled) {
  return { data: { available: true }, isLoading: false };
}
