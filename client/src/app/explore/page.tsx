import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

function Explore() {
  return (
    <>
      <Navbar />
      <div className="h-16 bg-[#081b33] " />
      <div className="flex justify-evenly items-center flex-col mx-5">
        <div
          id="wedding"
          className="text-center text-2xl md:text-4xl py-12 font-extrabold"
        >
          Wedding
        </div>
        <div className="flex justify-center gap-5 md:gap-20 items-center flex-row w-full">
          <Image
            src={"/wedding.jpg"}
            alt="wedding"
            height={1000}
            width={1000}
            className="md:w-[500px] w-60 rounded-xl"
          />
          <div className="flex flex-col gap-1 md:gap-3">
            <div>
              <h1 className="text-xs md:text-xl font-extrabold">Subcategories: </h1>
              <p className="text-xs font-light">
                Valima, Furniture, Valima, Jahez
              </p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">Maximum loan: </h3>
              <p className="text-xs font-light">PKR 5 Lakh</p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">Loan period: </h3>
              <p className="text-xs font-light">3 years</p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={"/wedding.jpg"}
            alt="wedding"
            height={1000}
            width={1000}
            className="md:w-[500px] w-64 rounded-xl "
          />
          <div>
            <h1>Subcategories: Valima, Furniture, Valima Food, Jahez</h1>
            <h3>Maximum loan: PKR 5 Lakh</h3>
            <h3>Loan period: 3 years</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
