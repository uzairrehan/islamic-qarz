import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";

function Hero() {
  return (
    <div className="relative w-full h-screen flex text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/100 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kaaba-lg.jpg')" }}
      />
        <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/kaaba-mobile.jpg')" }}
      />

      <div className="z-10 max-w-2xl px-6 lg:pt-60 pt-36">
        <h1 className="text-4xl md:text-5xl font-bold text-left">
          We believe in Islamic Finance & Qarz-e-Hasana !
        </h1>
        <p className="mt-4 text-sm text-left text-slate-300">
          A platform for managing Qarz-e-Hasana, ensuring transparency,
          fairness, and ease in loans.
        </p>
        <Link href={"/explore"} >
        <button className="mt-4 text-sm text-left bg-white text-[#081b33] p-1 border-2 rounded-3xl  px-4 font-bold flex gap-2  items-center justify-center">
          Explore
          <FaArrowTrendUp />
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
