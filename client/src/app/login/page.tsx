"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { IoLogInOutline } from "react-icons/io5";

function Login() {
  const [CNIC, setCNIC] = useState<number>();
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar />
      <div className="h-16 bg-[#081b33] " />
      <div className="w-5/6 md:max-w-lg rounded-lg m-auto p-6 pb-10 h-4/5 pt-20">
        <h1 className="text-center text-2xl md:text-3xl py-8 font-extrabold">
          Login to your account
        </h1>
        <div className="flex items-center justify-center flex-col w-full gap-2">
          <label htmlFor="CNIC" className="w-full">
            <h2 className="text-sm md:text-base font-extrabold mb-1">CNIC</h2>
            <input
              type="number"
              min={13}
              max={13}
              placeholder="4540272940164"
              required
              name="CNIC"
              id="CNIC"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black px-2"
              onChange={(e) => {
                setCNIC(Number(e.target.value));
              }}
              value={CNIC}
            />
          </label>
          <label htmlFor="password" className="w-full">
            <h2 className="text-sm md:text-base font-extrabold mb-1">
              Password
            </h2>
            <input
              type="password"
              required
              placeholder="•••••••"
              name="password"
              id="password"
              className="w-full mt-1  h-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-black px-2"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </label>
          <button
            type="button"
            onClick={() => {}}
            className="w-36 mt-4 text-sm  bg-white text-[#081b33] p-2 border-2 rounded-3xl  px-6 font-bold flex gap-2  items-center justify-center hover:bg-slate-300 transition"
          >
            Login
            <IoLogInOutline className="size-4" />
          </button>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Login;
