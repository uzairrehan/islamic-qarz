import React from "react";
import Card from "./Card";

function AllCards() {
  return (
    <>
      <div className="w-full pb-16">
        <h1 className="text-center text-3xl md:text-5xl py-12 font-extrabold ">
          Our Loan Options
        </h1>
        <div className="flex gap-2 flex-wrap bg-transparent justify-center items-center w-full ">
          <Card
            name={"Wedding Loan"}
            link={"/explore/#wedding"}
            desc={""}
            img={"/wedding.jpg"}
          />
          <Card
            name={"Business Loan"}
            link={"/explore/#business"}
            desc={""}
            img={"/business.jpg"}
          />
          <Card
            name={"Home Loan"}
            link={"/explore/#home"}
            desc={""}
            img={"/construction.jpeg"}
          />
          <Card
            name={"Education Loan"}
            link={"/explore/#education"}
            desc={""}
            img={"/education.jpg"}
          />
        </div>
      </div>
    </>
  );
}

export default AllCards;
