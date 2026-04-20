"use client";

import { useEffect, useState } from "react";
import formbricks from "@formbricks/js";
import { TourProvider } from "@reactour/tour";

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

export function AppTourProvider({ children }) {
  const [steps, setSteps] = useState([]);

  return (
    <TourProvider
      steps={steps}
      styles={{
        popover: (base) => ({
          ...base,
          borderRadius: "12px",
          padding: "20px",
          paddingTop: "40px",
        }),
      }}
    >
      {children}
    </TourProvider>
  );
}
