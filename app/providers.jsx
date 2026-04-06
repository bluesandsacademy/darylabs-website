"use client";

import { useEffect } from "react";
import formbricks from "@formbricks/js";

export function FormbricksProvider({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      formbricks.init({
        environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID,
        apiHost: process.env.NEXT_PUBLIC_FORMBRICKS_API_HOST,
      });
    }
  }, []);

  return <>{children}</>;
}
