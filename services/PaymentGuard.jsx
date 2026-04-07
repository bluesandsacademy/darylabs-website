"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useUser } from "./UserContext";

const PaymentGuard = ({ children, paymentRoute }) => {
  const { user, isLoggedIn, isInitialized } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const hasActiveSubscription = (user) => {
    return user?.subscription !== null && user?.subscription !== undefined;
  };

  useEffect(() => {
    if (!isInitialized) return;

    if (pathname === paymentRoute) {
      setIsLoading(false);
      return;
    }

    if (isLoggedIn && user && user.isVerified && !hasActiveSubscription(user)) {
      router.replace(paymentRoute);
      return;
    }

    if (
      isLoggedIn &&
      user &&
      user.isVerified &&
      hasActiveSubscription(user) &&
      pathname === paymentRoute
    ) {
      const dashboardRoute = paymentRoute.replace("/payments", "");
      router.replace(dashboardRoute);
      return;
    }

    setIsLoading(false);
  }, [isLoggedIn, user, isInitialized, pathname, router, paymentRoute]);

  if (isLoading || !isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PaymentGuard;
