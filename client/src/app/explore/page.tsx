import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

const loanData = [
  {
    id: "wedding",
    title: "Wedding Loans",
    image: "/wedding.jpg",
    subcategories: "Valima, Furniture Jahez",
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "3 years",
  },
  {
    id: "home",
    title: "Home Loans",
    image: "/construction.jpeg",
    subcategories: "Structure, Finishing",
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    id: "business",
    title: "Business Loans",
    image: "/business.jpg",
    subcategories: "Buy Stall, Advance Rent, Shop Assets",
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    id: "education",
    title: "Education Loans",
    image: "/education.jpg",
    subcategories: "University Fees, Child Fees Loan",
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "4 years",
  },
];

function Explore() {
  return (
    <>
      <Navbar />
      <div className="h-16 bg-[#081b33] " />
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
