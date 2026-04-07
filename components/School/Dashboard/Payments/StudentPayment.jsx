"use client";

import apiClient from "@/services/axios-instance";
import { useUser } from "@/services/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const VALID_COUPON = "abjedtech2025";
const COUPON_DISCOUNT = 0.6;

const getPricePerStudent = (count) => {
  if (count >= 501 && count <= 1000) return 3500;
  if (count >= 301 && count <= 500) return 4000;
  if (count >= 101 && count <= 300) return 4500;
  return 5000;
};

const SchoolStudentPayment = () => {
  const { user, token, refreshUser } = useUser();
  const router = useRouter();
  const [studentCount, setStudentCount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const pricePerStudent = getPricePerStudent(studentCount);
  const subtotal = studentCount * pricePerStudent;
  const discountAmount = couponApplied ? subtotal * COUPON_DISCOUNT : 0;
  const subtotalAfterDiscount = subtotal - discountAmount;
  const totalAmount = subtotalAfterDiscount;

  const formatCurrency = (amount) => amount.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const applyCoupon = () => {
    setCouponError("");
    if (!couponCode.trim()) { setCouponError("Please enter a coupon code"); return; }
    if (couponCode.trim().toLowerCase() === VALID_COUPON) {
      setCouponApplied(true);
      toast.success("Coupon applied! 60% discount added");
    } else {
      setCouponError("Invalid coupon code");
      toast.error("Invalid coupon code");
    }
  };

  const removeCoupon = () => { setCouponCode(""); setCouponApplied(false); setCouponError(""); toast.info("Coupon removed"); };

  const verifyPayment = async (reference) => {
    if (isProcessing) return;
    setIsProcessing(true);
    try {
      const res = await apiClient.get("/api/payments/verify", { params: { reference } });
      if (res.status === 200) {
        toast.success("Payment successful!");
        try {
          await apiClient.post("/api/payments/register-payment", {
            reference, userId: user?.userId, studentCount, pricePerStudent, subtotal, vatAmount: 0, amount: totalAmount, promoCode: couponCode,
          }, { headers: token ? { Authorization: `Bearer ${token}` } : {}, withCredentials: true });
          if (refreshUser) await refreshUser();
          setCouponCode(""); setCouponApplied(false);
          router.push("/school/dashboard");
        } catch (error) {
          toast.error("Payment successful but failed to register. Please contact support.");
          setTimeout(() => router.push("/school/dashboard"), 2000);
        }
      } else {
        toast.error("Payment verification failed. Please contact support.");
      }
    } catch (error) {
      toast.error("An error occurred. Please contact support.");
    } finally {
      setIsProcessing(false);
    }
  };

  const payWithPaystack = () => {
    if (!studentCount || studentCount <= 0) { toast.error("Please enter a valid number of students"); return; }
    if (studentCount > 1000) { toast.error("Maximum 1000 students allowed."); return; }
    if (!user?.email) { toast.error("Please login to continue"); return; }
    setIsProcessing(true);
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email: user.email,
      amount: Math.round(totalAmount * 100),
      currency: "NGN",
      metadata: { custom_fields: [
        { display_name: "Student Count", variable_name: "student_count", value: studentCount },
        { display_name: "User ID", variable_name: "user_id", value: user.userId },
        { display_name: "Coupon Applied", variable_name: "coupon_applied", value: couponApplied ? VALID_COUPON : "None" },
        { display_name: "Discount Amount", variable_name: "discount_amount", value: discountAmount },
      ]},
      onClose: () => { setIsProcessing(false); toast.info("Payment cancelled"); },
      callback: (response) => verifyPayment(response.reference),
    });
    handler.openIframe();
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 p-2 mt-3 lg:mt-5">
      <div className="flex flex-col gap-2 lg:gap-3">
        <p className="lg:text-lg font-semibold">Student payment</p>
        <p className="text-sm">Add Students and proceed to payment</p>
      </div>

      <div className="flex justify-between lg:p-2 flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 bg-white rounded-md p-2 py-4 w-full md:w-[48%]">
          <label htmlFor="studentNumber" className="text-sm font-semibold">Number of Students</label>
          <input className="border border-gray-200 rounded-md p-2 text-sm" type="number" min="1" max="1000" value={studentCount || ""} onChange={(e) => setStudentCount(Number(e.target.value))} id="studentNumber" placeholder="Enter number of students" />
          <div className="text-xs space-y-1">
            <p className="font-semibold">Pricing Tiers:</p>
            <p>50-100 students: ₦5,000/student</p>
            <p>101-300 students: ₦4,500/student</p>
            <p>301-500 students: ₦4,000/student</p>
            <p>501-1000 students: ₦3,500/student</p>
          </div>
          <div className="mt-4 border-t border-gray-200 pt-4">
            <label htmlFor="couponCode" className="text-sm font-semibold block mb-2">Have a Coupon Code?</label>
            <div className="flex gap-2">
              <input className={`border rounded-md p-2 text-sm flex-1 ${couponError ? "border-red-500" : "border-gray-200"} ${couponApplied ? "bg-green-50 border-green-500" : ""}`} type="text" value={couponCode} onChange={(e) => { setCouponCode(e.target.value); setCouponError(""); }} id="couponCode" placeholder="Enter coupon code" disabled={couponApplied} />
              {!couponApplied ? (
                <button onClick={applyCoupon} className="bg-blue-950 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-900 disabled:opacity-50" disabled={!couponCode.trim()}>Apply</button>
              ) : (
                <button onClick={removeCoupon} className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">Remove</button>
              )}
            </div>
            {couponError && <p className="text-xs text-red-500 mt-1">{couponError}</p>}
            {couponApplied && <p className="text-xs text-green-600 mt-1 font-semibold">✓ 60% discount applied!</p>}
          </div>
        </div>

        <div className="flex flex-col gap-2 bg-white rounded-md p-2 py-4 w-full md:w-[48%]">
          <div className="flex justify-between"><p className="text-sm">Students:</p><p className="text-sm">{studentCount}</p></div>
          <div className="flex justify-between"><p className="text-sm">Price Per Student:</p><p className="text-sm">₦{formatCurrency(pricePerStudent)}</p></div>
          <div className="flex justify-between"><p className="text-sm">Subtotal:</p><p className="text-sm">₦{formatCurrency(subtotal)}</p></div>
          {couponApplied && discountAmount > 0 && (
            <div className="flex justify-between text-green-600">
              <p className="text-sm font-semibold">Discount (60%):</p>
              <p className="text-sm font-semibold">-₦{formatCurrency(discountAmount)}</p>
            </div>
          )}
          {couponApplied && (
            <div className="flex justify-between border-t border-gray-200 pt-2">
              <p className="text-sm">Subtotal After Discount:</p>
              <p className="text-sm">₦{formatCurrency(subtotalAfterDiscount)}</p>
            </div>
          )}
          <div className="flex justify-between mt-4 border-t border-t-gray-200 pt-2">
            <p className="text-sm font-semibold">Total:</p>
            <p className="text-sm font-semibold">₦{formatCurrency(totalAmount)}</p>
          </div>
          {couponApplied && discountAmount > 0 && (
            <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded">
              <p className="text-xs text-green-700 font-semibold text-center">You're saving ₦{formatCurrency(discountAmount)}!</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <button className="bg-blue-950 text-white p-2 text-xs md:text-sm rounded-md w-full disabled:opacity-50 disabled:cursor-not-allowed" onClick={payWithPaystack} disabled={!studentCount || studentCount <= 0 || isProcessing}>
          {isProcessing ? "Processing..." : "Proceed to checkout"}
        </button>
        <p className="text-xs text-blue-950">Secure payment processing * All transactions are encrypted</p>
      </div>
    </div>
  );
};

export default SchoolStudentPayment;
