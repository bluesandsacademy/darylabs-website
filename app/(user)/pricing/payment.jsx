import React from "react";
import { BanknoteArrowDown, Landmark, Smartphone, Wallet } from "lucide-react";

const PaymentOptions = () => {
  const paymentMethods = [
    {
      icon: BanknoteArrowDown,
      title: "Debit/Credit Cards (Visa, MasterCard, Verve)",
    },
    {
      icon: Landmark,
      title: "Bank Transfer ",
    },
    {
      icon: Smartphone,
      title: "Mobile Money ",
    },
    {
      icon: Wallet,
      title: "Bulk Payments for Schools ",
    },
  ];

  return (
    <div className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-secondary text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            Payment Options
          </h2>
          <p
            className="text-gray-600 text-lg sm:text-xl"
            style={{ fontFamily: "var(--font-jarkata)" }}
          >
            DaryLabs supports flexible, secure payment options
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 shadow-md rounded-xl py-4 text-center gap-6"
            >
              {/* Icon Circle */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <method.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3
                className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-[250px]"
                style={{ fontFamily: "var(--font-jarkata)" }}
              >
                {method.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
