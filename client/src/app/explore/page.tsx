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
          Wedding Loans
        </div>
        <div className="flex justify-center gap-4 md:gap-20 items-center flex-row w-full">
          <Image
            src={"/wedding.jpg"}
            alt="wedding"
            height={1000}
            width={1000}
            className="md:w-[500px] md:h-[280px] w-[250px] h-[125px] rounded-xl"
          />
          <div className="flex flex-col gap-1 md:gap-3  md:w-full w-[126px]">
            <div>
              <h1 className="text-xs md:text-xl font-extrabold">
                Subcategories:{" "}
              </h1>
              <p className="text-xs font-light w-full">
                Valima, Furniture Jahez
              </p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">Max loan: </h3>
              <p className="text-xs font-light">PKR 5 Lakh</p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">
                Loan period:{" "}
              </h3>
              <p className="text-xs font-light">3 years</p>
            </div>
          </div>
        </div>
        <div
          id="home"
          className="text-center text-2xl md:text-4xl py-12 font-extrabold"
        >
          Home Loans
        </div>
        <div className="flex justify-center gap-4 md:gap-20 items-center flex-row w-full">
          <Image
            src={"/construction.jpeg"}
            alt="construction"
            height={1000}
            width={1000}
            className="md:w-[500px] md:h-[280px] w-[250px] h-[125px] rounded-xl"
          />
          <div className="flex flex-col gap-1 md:gap-3  md:w-full w-[126px]">
            <div>
              <h1 className="text-xs md:text-xl font-extrabold">
                Subcategories:{" "}
              </h1>
              <p className="text-xs font-light  w-full">Structure, Finishing</p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">Max loan: </h3>
              <p className="text-xs font-light">PKR 10 Lakh</p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">
                Loan period:{" "}
              </h3>
              <p className="text-xs font-light">5 years</p>
            </div>
          </div>
        </div>
        <div
          id="business"
          className="text-center text-2xl md:text-4xl py-12 font-extrabold"
        >
          Business Loans
        </div>
        <div className="flex justify-center gap-4 md:gap-20 items-center flex-row w-full">
          <Image
            src={"/business.jpg"}
            alt="business"
            height={1000}
            width={1000}
            className="md:w-[500px] md:h-[280px] w-[250px] h-[125px] rounded-xl"
          />
          <div className="flex flex-col gap-1 md:gap-3 md:w-full w-[126px]">
            <div>
              <h1 className="text-xs md:text-xl font-extrabold">
                Subcategories:{" "}
              </h1>
              <p className="text-xs font-light  w-full">
                Buy Stall, Advance Rent, Shop Assets
              </p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">Max loan: </h3>
              <p className="text-xs font-light">PKR 10 Lakh</p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">
                Loan period:{" "}
              </h3>
              <p className="text-xs font-light">5 years</p>
            </div>
          </div>
        </div>
        <div
          id="education"
          className="text-center text-2xl md:text-4xl py-12 font-extrabold"
        >
          Education Loans
        </div>
        <div className="flex justify-center gap-4 md:gap-20 items-center flex-row w-full">
          <Image
            src={"/education.jpg"}
            alt="education"
            height={1000}
            width={1000}
            className="md:w-[500px] md:h-[280px] w-[250px] h-[125px] rounded-xl"
          />
          <div className="flex flex-col gap-1 md:gap-3 md:w-full w-[126px]">
            <div>
              <h1 className="text-xs md:text-xl font-extrabold">
                Subcategories:{" "}
              </h1>
              <p className="text-xs font-light  w-full">
                University Fees, Child Fees Loan
              </p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">Max loan: </h3>
              <p className="text-xs font-light">PKR 5 Lakh</p>
            </div>
            <div>
              <h3 className="text-xs md:text-xl font-extrabold">
                Loan period:{" "}
              </h3>
              <p className="text-xs font-light">4 years</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
