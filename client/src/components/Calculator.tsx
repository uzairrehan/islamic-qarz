"use client";
import { InitialDepositConstant, Loans, maxAmount, maxPer, subCat } from "@/constants/Loans";
import React, { useState } from "react";

function Calculator() {
  const [category, setCategory] = useState<CategoryType>("Wedding");
  const [subCategory, setSubCategory] = useState("");
  const [period, setPeriod] = useState(1);
  const [amount, setAmount] = useState(0);
  const [initDeposit, setInitDeposit] = useState(0);

  type CategoryType =  "Wedding" | "Home" | "Business" | "Education"

  function handleCalculate() {
    if (!category || !subCategory || !period || !amount || !initDeposit) {
      return console.log("all fields are required");
    }
    if (period > maxPer[category]) {
      return console.log("period kam karo");
    }
    if (amount > maxAmount[category]) {
      return console.log("amount kam karo");
    }
    if (initDeposit < InitialDepositConstant){
      return console.log("init deposit must be 50000");
    }


    

    console.log("====================================");
    console.log("submited");
    console.log("====================================");
  }

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
                required
                name="category"
                id="category"
                onChange={(e) => {
                  setCategory(e.target.value as CategoryType);
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
                required
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
              <input
                type="number"
                required
                name="period"
                id="period"
                className="text-black"
                min={1}
                max={maxPer[category]}
                onChange={(e) => {
                  setPeriod(Number(e.target.value));
                }}
                value={period}
              />
            </label>

            <label htmlFor="amount">
              <h2>Loan Amount</h2>
              <input
                type="number"
                name="amount"
                required
                id="amount"
                className="text-black"
                min={0}
                max={maxAmount[category]}
                onChange={(e) => {
                  setAmount(Number(e.target.value));
                }}
                value={amount}
              />
            </label>

            <label htmlFor="init-deposit">
              <h2>Initial Deposit</h2>
              <input
                type="number"
                required
                name="init-deposit"
                id="init-deposit"
                className="text-black"
                min={0}
                max={maxAmount[category]}
                onChange={(e) => {
                  setInitDeposit(Number(e.target.value));
                }}
                value={initDeposit}
              />
            </label>
            <button type="button" onClick={handleCalculate}>
              Calculate
            </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
