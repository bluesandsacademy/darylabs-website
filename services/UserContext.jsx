"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setTokenState] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const clearUserData = () => {
    setUserState(null);
    setIsLoggedIn(false);
    setTokenState(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    }
  };

  const logout = async () => {
    try {
      clearUserData();
      router.replace("/auth/login");
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", "/auth/login");
      }
    } catch (err) {
      console.error("Logout error:", err);
      clearUserData();
      router.replace("/auth/login");
    }
  };

  const refreshUser = async () => {
    const currentToken = token || (typeof window !== "undefined" ? localStorage.getItem("token") : null);
    if (!currentToken) return;

    setIsRefreshing(true);
    try {
      const response = await axios.get(`${baseUrl}/auth/me`, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
          "Content-Type": "application/json",
        },
      });

      const data = response.data;
      const updatedUser = {
        userId: data.userId || data.id,
        fullName: data.fullName || data.name,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        country: data.country,
        dob: data.dob,
        role: data.role,
        avatarUrl: data.avatarUrl,
        isVerified: data.isVerified,
        schoolId: data.schoolId,
        subscription: data.subscription,
        currentTier: data.currentTier,
        promoApplied: data.promoApplied,
      };

      setUserState(updatedUser);
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error("Error refreshing user:", error);
      if (axios.isAxiosError && error.response?.status === 401) {
        await logout();
      }
    } finally {
      setIsRefreshing(false);
    }
  };

  const checkTokenValidity = () => {
    if (typeof window === "undefined") return false;
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        return true;
      } catch (error) {
        clearUserData();
        return false;
      }
    }
    return false;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUser && storedToken && checkTokenValidity()) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserState(parsedUser);
        setTokenState(storedToken);
        setIsLoggedIn(storedIsLoggedIn === "true");
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        clearUserData();
      }
    } else {
      clearUserData();
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorageChange = (e) => {
      if (e.key === "token" && !e.newValue) {
        setUserState(null);
        setIsLoggedIn(false);
        setTokenState(null);
        router.replace("/auth/login");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [router]);

  const setUser = (user) => {
    setUserState(user);
    if (typeof window !== "undefined") {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    }
  };

  const setToken = (token) => {
    setTokenState(token);
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
      }
    }
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        refreshUser,
        token,
        setToken,
        isInitialized,
        isRefreshing,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
