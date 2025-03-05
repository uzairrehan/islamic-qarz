import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { loanData } from "@/constants/Loans";
import Calculator from "@/components/Calculator";


function Explore() {
  return (
    <>
      <Navbar />
      <div className="h-16 bg-[#081b33] " />
      <Calculator/>
      <div className="flex justify-evenly items-center flex-col mx-5">
        {loanData.map((loan) => (
          <div key={loan.id}>
            <div
              id={loan.id}
              className="text-center text-2xl md:text-4xl py-12 font-extrabold"
            >
              {loan.title}
            </div>
            <div className="flex justify-center gap-4 md:gap-20 items-center flex-row w-full">
              <Image
                src={loan.image}
                alt={loan.id}
                height={1000}
                width={1000}
                className="md:w-[500px] md:h-[280px] w-[250px] h-[125px] rounded-xl"
              />
              <div className="flex flex-col gap-1 md:gap-3 md:w-full w-[126px]">
                <div>
                  <h1 className="text-xs md:text-xl font-extrabold">Subcategories:</h1>
                  <p className="text-xs font-light w-full">{loan.subcategories}</p>
                </div>
                <div>
                  <h3 className="text-xs md:text-xl font-extrabold">Max loan:</h3>
                  <p className="text-xs font-light">{loan.maxLoan}</p>
                </div>
                <div>
                  <h3 className="text-xs md:text-xl font-extrabold">Loan period:</h3>
                  <p className="text-xs font-light">{loan.loanPeriod}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Explore;
