"use server";

import { createClient } from "@/lib/supabase/server";

export async function registerIndividual(formData) {
  const supabase = await createClient();

  // Extract form data
  const individualData = {
    email: formData.get("email"),
    password: formData.get("password"),
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    dob: formData.get("dob"),
    gender: formData.get("gender"),
    country: formData.get("country"),
    couponCode: formData.get("couponCode") || null,
  };

  // Validate required fields
  if (
    !individualData.email ||
    !individualData.password ||
    !individualData.fullName
  ) {
    return {
      error: {
        message: "Please fill in all required fields.",
        type: "validation_error",
      },
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(individualData.email)) {
    return {
      error: {
        message: "Please enter a valid email address.",
        type: "invalid_email",
      },
    };
  }

  // Validate password length
  if (individualData.password.length < 6) {
    return {
      error: {
        message: "Password must be at least 6 characters long.",
        type: "weak_password",
      },
    };
  }

  // Validate date of birth
  const dobDate = new Date(individualData.dob);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();

  if (age < 13) {
    return {
      error: {
        message: "You must be at least 13 years old to register.",
        type: "age_restriction",
      },
    };
  }

  // Sign up the user with metadata
  const { data, error } = await supabase.auth.signUp({
    email: individualData.email,
    password: individualData.password,
    options: {
      data: {
        full_name: individualData.fullName,
        phone: individualData.phone,
        dob: individualData.dob,
        gender: individualData.gender,
        country: individualData.country,
        coupon_code: individualData.couponCode,
        user_type: "individual", // Important for trigger
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    // Handle specific error cases
    if (
      error.message.includes("already registered") ||
      error.message.includes("already been registered")
    ) {
      return {
        error: {
          message:
            "This email is already registered. Please try logging in instead.",
          type: "user_exists",
        },
      };
    }

    return {
      error: {
        message: error.message || "Registration failed. Please try again.",
        type: "signup_error",
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
