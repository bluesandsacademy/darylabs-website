"use client";

import { useEffect } from "react";
import formbricks from "@formbricks/js";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {
  useEffect(() => {
    // Initialize Formbricks
    if (typeof window !== "undefined") {
      formbricks.init({
        environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID,
        apiHost: process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST,
        debug: process.env.NODE_ENV === "development",
      });
    }
  }, []);

  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
}
