import Link from "next/link";

export const metadata = {
  title: "Get Started | Create your Darylabs Account",
};

const linkOptions = [
  { title: "Individual", url: "/auth/register/individual" },
  { title: "School", url: "/auth/register/school" },
];

export default function RegisterPage() {
  return (
    <section className="min-h-screen p-3">
      <div className="w-full flex justify-center relative z-0">
        <img src="/images/bg/cover.png" className="w-full object-contain z-0" alt="" />
        <div className="absolute h-full md:h-auto top-1 lg:top-0 flex flex-col justify-center items-center gap-y-0 lg:gap-y-1 md:text-center text-white max-w-lg lg:max-w-none md:bottom-28 bottom-5 space-y-1 lg:space-y-3">
          <img src="/logo-white.png" alt="Darylabs Logo" className="w-auto h-7 lg:h-12 mx-auto" />
          <h1 className="hidden md:flex text-xl md:text-2xl lg:text-4xl font-normal">Get Started</h1>
          <p className="font-thin text-xs lg:text-lg max-w-xs md:max-w-lg lg:max-w-none text-center">
            Choose your role to begin your journey on Darylabs.
          </p>
        </div>
      </div>
      <div className="border max-w-2xl mx-auto flex flex-col gap-y-5 py-20 px-10 rounded-lg shadow-sm mt-0 md:-mt-28 z-30 relative bg-white">
        {linkOptions.map((link, index) => (
          <Link
            href={link.url}
            key={index}
            className={`text-center text-sm md:text-base rounded-md py-2 md:py-3 lg:py-5 ${index === 0 ? "bg-[#006fcc] text-white" : "bg-[#f1f4f9]"}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
