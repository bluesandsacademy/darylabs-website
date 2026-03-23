"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/supabase/client";

const AuthContext = createContext({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  signOut: async () => {},
});

export function AuthProvider({ children, initialUser = null }) {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState(initialUser);
  const [isLoading, setIsLoading] = useState(!initialUser);

  useEffect(() => {
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

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        await fetchUserProfile(session.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      } else if (event === "TOKEN_REFRESHED" && session?.user) {
        await fetchUserProfile(session.user);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, initialUser]);

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
    await supabase.auth.signOut();
    setUser(null);
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
