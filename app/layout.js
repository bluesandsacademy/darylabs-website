import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import QueryProvider from "@/components/QueryClientProvider";

const jarkataSans = Plus_Jakarta_Sans({
  variable: "--font-jarkata",
  subsets: ["latin"],
});

export const metadata = {
  title: " DARYLAB | Africa STEM EdTech Expo",
  description:
    "Africa STEM EdTech Expo - Empowering the next generation through STEM education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jarkataSans.variable} antialiased`}>
        <QueryProvider>
          {children}

          <Toaster position="top-center" />
        </QueryProvider>
      </body>
    </html>
  );
}
