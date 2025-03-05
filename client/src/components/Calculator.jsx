"use client";
import { Loans, maxAmount, maxPer, subCat } from "@/constants/Loans";
import React, { useState } from "react";

function Calculator() {
  const [category, setCategory] = useState("Wedding");
  const [subCategory, setSubCategory] = useState("");
  const [period, setPeriod] = useState(1);
  const [amount, setAmount] = useState(0);
  console.log(category, "category");
  console.log(subCategory, "subcategory");

  return (
    <>
      <div>
        <div>
          <h1>Loan Calculator</h1>
          <p>Calculate your estimated loan breakdown</p>
        </div>
        <div>
          <label htmlFor="category">
            <h2>Loan Category</h2>
            <select
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-black"
              value={category}
            >
              {Loans?.map(({ cat }, index) => {
                return (
                  <option key={index} value={cat}>
                    {cat} Loan
                  </option>
                );
              })}
            </select>
          </label>




          <label htmlFor="sub-category">
            <h2>Loan SubCategory</h2>
            <select
              name="sub-category"
              id="sub-category"
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
              className="text-black"
              value={subCategory}
            >
              {subCat[category]?.map((val, index) => {
                return (
                  <option key={index} value={val}>
                    {val} Loan
                  </option>
                );
              })}
            </select>
          </label>




          <label htmlFor="period">
            <h2>Loan Period in Years</h2>
            <input type="number" name="period" id="period" 
              className="text-black"
            min={1}
            max={maxPer[category]}
            onChange={(e)=>{
              setPeriod(Number(e.target.value))
            }}
            value={period}
            />
          </label>




          <label htmlFor="amount">
            <h2>Loan Amount</h2>
            <input type="number" name="amount" id="amount" 
              className="text-black"
            min={0}
            max={maxAmount[category]}
            onChange={(e)=>{
              setAmount(Number(e.target.value))
            }}
            value={amount}
            />
          </label>

          <label htmlFor="init-deposit">
            <h2>Loan Amount</h2>
            <input type="number" name="init-deposit" id="init-deposit" 
              className="text-black"
            min={0}
            max={maxAmount[category]}
            onChange={(e)=>{
              setAmount(Number(e.target.value))
            }}
            value={amount}
            />
          </label>

        </div>
      </div>
    </>
  );
}

export default Calculator;
