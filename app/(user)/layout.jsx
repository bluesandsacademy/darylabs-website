import Navbar from "../../components/common/navbar";
import Footer from "../../components/common/footer";
import "../globals.css";
import { Toaster } from "react-hot-toast";

export default function UserLayout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 pt-22">{children}</main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  );
}
