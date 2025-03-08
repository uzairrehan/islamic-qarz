"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Register({ dialog }:{dialog: Dispatch<SetStateAction<boolean>>}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CNIC, setCNIC] = useState("");

  return (
    <>
      <div className="bg-[#040e1c] w-5/6 md:max-w-lg rounded-lg m-auto p-6 pb-10">
      <div className="w-full items-end flex justify-end">

        <RxCross2
          className="hover:cursor-pointer size-8"
          onClick={() => {
            dialog((val:boolean) => !val);
          }}
          />

          </div>
        <h1 className="text-center text-2xl md:text-3xl py-8 font-extrabold">
          Register to proceed
        </h1>
        <div className="flex items-center justify-center flex-col w-full gap-2">
          <label htmlFor="name" className="w-full">
            <h2 className="text-sm md:text-base font-extrabold mb-1">Name</h2>
            <input
              type="text"
              required
              name="name"
              id="name"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </label>

          <label htmlFor="email" className="w-full">
            <h2 className="text-sm md:text-base font-extrabold mb-1">Email</h2>
            <input
              type="email"
              required
              name="email"
              id="email"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>

          <label htmlFor="CNIC" className="w-full">
            <h2 className="text-sm md:text-base font-extrabold mb-1">CNIC</h2>
            <input
              type="text"
              required
              name="CNIC"
              id="CNIC"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black"
              onChange={(e) => {
                setCNIC(e.target.value);
              }}
              value={CNIC}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              dialog((val:boolean) => !val);
            }}
            className="w-36 mt-4 text-sm  bg-white text-[#081b33] p-2 border-2 rounded-3xl  px-6 font-bold flex gap-2  items-center justify-center hover:bg-slate-300 transition"
          >
            Register
            <FaUser className="size-4" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
