function Hero() {
  return ( 
    <div className="relative w-full h-screen flex text-white text-center">
      <div className="absolute inset-0 bg-gradient-to-r from-[#071629]/100 z-10" />

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/kaaba-lg.jpg')" }}
      />

      <div className="z-10 max-w-2xl px-6 lg:pt-60 pt-36">
        <h1 className="text-4xl md:text-5xl font-bold text-left">
          We believe in Islamic Finance & Qarz-e-Hasana !
        </h1>
        <p className="mt-4 text-sm text-left text-slate-300">
          A platform for managing Qarz-e-Hasana, ensuring transparency,
          fairness, and ease in loans.
        </p>
      </div>
    </div>
  );
}

export default Hero;
