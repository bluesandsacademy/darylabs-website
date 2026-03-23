"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/supabase/client";

const AuthContext = createContext({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  signOut: async () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // createClient() returns null on the server — this effect only runs in the browser
    const supabase = createClient();
    if (!supabase) {
      setIsLoading(false);
      return;
    }

    const fetchUserProfile = async (authUser) => {
      try {
        const userType = authUser.user_metadata?.user_type;
        let profile = null;
        let role = "student";

        if (userType === "school") {
          const { data } = await supabase
            .from("schools")
            .select("*")
            .eq("id", authUser.id)
            .single();
          if (data) { profile = data; role = "schoolAdmin"; }
        } else if (userType === "individual") {
          const { data } = await supabase
            .from("individuals")
            .select("*")
            .eq("id", authUser.id)
            .single();
          if (data) { profile = data; role = "student"; }
        }

        setUser({
          id: authUser.id,
          email: authUser.email,
          fullName: profile?.full_name || authUser.user_metadata?.full_name || "User",
          role,
          userType,
          profile,
        });
      } catch {
        setUser(null);
      }
    };

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchUserProfile(session.user).finally(() => setIsLoading(false));
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if ((event === "SIGNED_IN" || event === "TOKEN_REFRESHED") && session?.user) {
          await fetchUserProfile(session.user);
        } else if (event === "SIGNED_OUT") {
          setUser(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []); // Runs once on mount in the browser only

  const signOut = async () => {
    const supabase = createClient();
    if (supabase) await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
