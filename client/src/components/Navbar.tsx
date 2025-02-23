"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  useState()
  return (
    <>
      <div className="h-16 bg-[#071629]" />
      <nav className="text-white w-full h-16 flex flex-nowrap items-center justify-center fixed top-0 backdrop-blur z-50 shadow-md shadow-[#071629]">
        <div className="flex w-5/6 items-center justify-between">
          <div>
            <Image
              src={"/logo.png"}
              alt={"Islamic Qarz"}
              width={80}
              height={80}
            />
          </div>
            <ul className="hidden items-center justify-between w-auto gap-4 text-sm  md:flex">
              <Link href={"/explore-loan-options"}>
                <li>Explore</li>
              </Link>
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
              <li>
                <Link href={"/login"}>
                  <button className="bg-white text-[#081b33] p-2 border-2 rounded-2xl ml-8 px-4 font-bold">
                    Login
                  </button>
                </Link>
              </li>
            </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
