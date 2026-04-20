import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import QueryProvider from "@/components/QueryClientProvider";
import { UserProvider } from "@/services/UserContext";
import AuthGuard from "@/services/AuthGuard";
import { AppTourProvider } from "@/app/Providers";

const jarkataSans = Plus_Jakarta_Sans({
  variable: "--font-jarkata",
  subsets: ["latin"],
});

export const metadata = {
  title: "Darylabs | Africa STEM EdTech",
  description:
    "Transforming Education Through Innovation with Cutting-Edge STEM Learning Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://js.paystack.co/v1/inline.js" async></script>
      </head>
      <body className={`${jarkataSans.variable} antialiased`}>
        <QueryProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <UserProvider>
            <AppTourProvider>
              <AuthGuard>{children}</AuthGuard>
            </AppTourProvider>
          </UserProvider>
          <Toaster position="top-center" />
        </QueryProvider>
      </body>
    </html>
  );
}
