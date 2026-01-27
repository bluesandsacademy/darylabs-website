"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { createClient } from "@/supabase/client";

const AuthContext = createContext({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  signOut: async () => {},
});

export function AuthProvider({ children, initialUser = null }) {
  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(!initialUser);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          await fetchUserProfile(session.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (!initialUser) {
      getInitialSession();
    }

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        await fetchUserProfile(session.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        router.push("/auth/login");
      } else if (event === "TOKEN_REFRESHED" && session?.user) {
        await fetchUserProfile(session.user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router, initialUser]);

  const fetchUserProfile = async (authUser) => {
    try {
      const userType = authUser.user_metadata?.user_type;
      let profile = null;
      let role = "student";

      if (userType === "school") {
        const { data: schoolData } = await supabase
          .from("schools")
          .select("*")
          .eq("id", authUser.id)
          .single();

        if (schoolData) {
          profile = schoolData;
          role = "schoolAdmin";
        }
      } else if (userType === "individual") {
        const { data: individualData } = await supabase
          .from("individuals")
          .select("*")
          .eq("id", authUser.id)
          .single();

        if (individualData) {
          profile = individualData;
          role = "student";
        }
      }

      setUser({
        id: authUser.id,
        email: authUser.email,
        fullName:
          profile?.full_name || authUser.user_metadata?.full_name || "User",
        role: role,
        userType: userType,
        profile: profile,
      });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setUser(null);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      router.push("/auth/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
