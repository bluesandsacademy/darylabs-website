"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import formbricks from "@formbricks/js";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.setup({
      environmentId: process.env.NEXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID,
      appUrl: process.env.NEXT_PUBLIC_APP_URL, // use PUBLIC_URL if you are using multi-domain setup, otherwise use WEBAPP_URL
    });
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}
