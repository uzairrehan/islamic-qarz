"use client";
import {
  InitialDepositConstant,
  Loans,
  maxAmount,
  maxPer,
  subCat,
} from "@/constants/Loans";
import { addLoan, deleteLoan, selectCount } from "@/lib/features/loanSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CalculatedType, CategoryType } from "@/types/loanType";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";

function Calculator() {
  const [category, setCategory] = useState<CategoryType>("Wedding");
  const [subCategory, setSubCategory] = useState("Valima");
  const [period, setPeriod] = useState(1);
  const [amount, setAmount] = useState(0);
  const [initDeposit, setInitDeposit] = useState(0);
  const [text, setText] = useState("");
  const [calculated, setCalculated] = useState<undefined | CalculatedType>(undefined);
  const value = useAppSelector(selectCount)
  const dispatch = useAppDispatch()



  function handleCalculate() {
    if (!category || !subCategory || !period || !amount || !initDeposit) {
      return setText("All fields are required!");
    }
    if (period > maxPer[category]) {
      return setText("Period invalid!");
    }
    if (amount > maxAmount[category]) {
      return setText("Amount invalid");
    }
    if (initDeposit < InitialDepositConstant) {
      return setText("Initial deposit must be 50000");
    }
    if (initDeposit > amount) {
      return setText("Initial deposit must be less than total amount");
    }
    setText("");
    const totalMonth = period * 12;
    const permonthAmount = (amount - initDeposit) / totalMonth;

    const result = {
      category: category,
      subCategory: subCategory,
      period: period,
      totalAmount: amount,
      initialDeposit: initDeposit,
      totalMonth: totalMonth,
      permonthAmount: permonthAmount,
    };
    setCalculated(result as CalculatedType);
    dispatch(addLoan(result))
  }
  console.log('================from state====================');
  console.log(value);
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 ">
        <div className="text-center mb-6">
          <h1 className="text-center text-3xl md:text-5xl py-12 font-extrabold">
            Loan Calculator
          </h1>
        </div>
        <div className="space-y-4">
          <label htmlFor="category" className="block">
            <h2 className="text-xs md:text-xl font-extrabold mb-1">Category</h2>
            <select
              required
              name="category"
              id="category"
              onChange={(e) => {
                setCategory(e.target.value as CategoryType);
              }}
              className="w-full mt-1 h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
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

          <label htmlFor="sub-category" className="block">
            <h2 className="text-xs md:text-xl font-extrabold mb-1">
              SubCategory
            </h2>
            <select
              name="sub-category"
              id="sub-category"
              required
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
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

          <label htmlFor="period" className="block">
            <h2 className="text-xs md:text-xl font-extrabold mb-1">
              Period in Years (max {maxPer[category]} year)
            </h2>
            <input
              type="number"
              required
              name="period"
              id="period"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              min={1}
              max={maxPer[category]}
              onChange={(e) => {
                setPeriod(Number(e.target.value));
              }}
              value={period}
            />
          </label>

          <label htmlFor="amount" className="block">
            <h2 className="text-xs md:text-xl font-extrabold mb-1">
              Total Amount you want (max {maxAmount[category]}pkr)
            </h2>
            <input
              type="number"
              name="amount"
              required
              id="amount"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              min={0}
              max={maxAmount[category]}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              value={amount}
            />
          </label>

          <label htmlFor="init-deposit" className="block">
            <h2 className="text-xs md:text-xl font-extrabold mb-1">
              Initial Deposit (min {InitialDepositConstant})
            </h2>
            <input
              type="number"
              required
              name="init-deposit"
              id="init-deposit"
              className="w-full mt-1 h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              min={0}
              max={maxAmount[category]}
              onChange={(e) => {
                setInitDeposit(Number(e.target.value));
              }}
              value={initDeposit}
            />
          </label>
          <p className=" w-full mt-4 text-sm text-center  text-red-600 p-2 px-6 font-bold">
            {text && text}
          </p>
          <button
            type="button"
            onClick={handleCalculate}
            className="w-full mt-4 text-sm  bg-white text-[#081b33] p-2 border-2 rounded-3xl  px-6 font-bold flex gap-2  items-center justify-center hover:bg-slate-300 transition"
          >
            Calculate
            <BiSend className="size-4" />
          </button>
              {
                calculated && <div className="p-4 rounded-lg">
            <p className="font-semibold">
              Category:{" "}
              <span className="font-normal">{calculated?.category}</span>
            </p>
            <p className="font-semibold">
              SubCategory:{" "}
              <span className="font-normal">{calculated?.subCategory}</span>
            </p>
            <p className="font-semibold">
              Period:{" "}
              <span className="font-normal">{calculated?.period} years</span>
            </p>
            <p className="font-semibold">
              Total Amount:{" "}
              <span className="font-normal">{calculated?.totalAmount}pkr</span>
            </p>
            <p className="font-semibold">
              Initial Deposit:{" "}
              <span className="font-normal">{calculated?.initialDeposit}pkr</span>
            </p>
            <p className="font-semibold">
              Total Months:{" "}
              <span className="font-normal">{calculated?.totalMonth}</span>
            </p>
            <p className="font-semibold">
              Per Month Amount:{" "}
              <span className="font-normal">{calculated?.permonthAmount}pkr</span>
            </p>
          </div>
  }
        </div>
      </div>
    </>
  );
}

export default Calculator;
