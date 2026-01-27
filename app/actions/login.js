"use server";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export async function loginUser(formData) {
  const supabase = await createClient();

  const credentials = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // Validate credentials
  if (!credentials.email || !credentials.password) {
    return {
      error: {
        message: "Please enter both email and password.",
        type: "validation_error",
      },
    };
  }

  // Attempt to sign in
  const { data, error } = await supabase.auth.signInWithPassword({
    email: credentials.email,
    password: credentials.password,
  });

  if (error) {
    return {
      error: {
        message:
          error.message === "Invalid login credentials"
            ? "Invalid email or password. Please try again."
            : error.message,
        type: "auth_error",
      },
    };
  }

  // Get user profile based on user type from metadata
  const userType = data.user?.user_metadata?.user_type;
  let profile = null;
  let role = "student"; // default role

  if (userType === "school") {
    // Fetch school profile
    const { data: schoolData, error: schoolError } = await supabase
      .from("schools")
      .select("*")
      .eq("id", data.user.id)
      .single();

    if (!schoolError && schoolData) {
      profile = schoolData;
      role = "schoolAdmin";
    }
  } else if (userType === "individual") {
    // Fetch individual profile
    const { data: individualData, error: individualError } = await supabase
      .from("individuals")
      .select("*")
      .eq("id", data.user.id)
      .single();

    if (!individualError && individualData) {
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
      role: role,
      userType: userType,
      profile: profile,
    },
    session: data.session,
  };
}

export async function getCurrentUser() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  // Get user profile based on user type
  const userType = user.user_metadata?.user_type;
  let profile = null;
  let role = "student";

  if (userType === "school") {
    const { data: schoolData } = await supabase
      .from("schools")
      .select("*")
      .eq("id", user.id)
      .single();

    if (schoolData) {
      profile = schoolData;
      role = "schoolAdmin";
    }
  } else if (userType === "individual") {
    const { data: individualData } = await supabase
      .from("individuals")
      .select("*")
      .eq("id", user.id)
      .single();

    if (individualData) {
      profile = individualData;
      role = "student";
    }
  }

  return {
    id: user.id,
    email: user.email,
    fullName: profile?.full_name || user.user_metadata?.full_name || "User",
    role: role,
    userType: userType,
    profile: profile,
  };
}

export async function logoutUser() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/auth/login");
}
