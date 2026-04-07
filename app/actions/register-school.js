"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function registerSchool(formData) {
  const supabase = await createClient();

  // Extract form data
  const schoolData = {
    email: formData.get("email"),
    password: formData.get("password"),
    fullName: formData.get("fullName"),
    schoolName: formData.get("schoolName"),
    phone: formData.get("phone"),
    position: formData.get("position"),
    totalStudents: formData.get("totalStudents"),
    country: formData.get("country"),
    subdomain: formData.get("subdomain"),
    couponCode: formData.get("couponCode") || null,
  };

  // Validate subdomain uniqueness
  const { data: existingSchool } = await supabase
    .from("schools")
    .select("subdomain")
    .eq("subdomain", schoolData.subdomain)
    .single();

  if (existingSchool) {
    return {
      error: {
        message: "This subdomain is already taken. Please choose another one.",
        type: "subdomain_taken",
      },
    };
  }

  // Sign up the user with metadata
  const { data, error } = await supabase.auth.signUp({
    email: schoolData.email,
    password: schoolData.password,
    options: {
      data: {
        full_name: schoolData.fullName,
        school_name: schoolData.schoolName,
        phone: schoolData.phone,
        position: schoolData.position,
        total_students: schoolData.totalStudents,
        country: schoolData.country,
        subdomain: schoolData.subdomain,
        coupon_code: schoolData.couponCode,
        user_type: "school", // Important for trigger
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: {
        message: error.message,
        type: error.status === 422 ? "user_exists" : "signup_error",
      },
    };
  }

  return {
    success: true,
    data,
    message:
      "Registration successful! Please check your email to verify your account.",
  };
}

export async function checkSubdomainAvailability(subdomain) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("schools")
    .select("subdomain")
    .eq("subdomain", subdomain)
    .single();

  if (error && error.code === "PGRST116") {
    // Not found - subdomain is available
    return { available: true };
  }

  return { available: false };
}
