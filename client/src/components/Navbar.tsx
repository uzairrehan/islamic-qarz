"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className={`${open ? "h-52" : "h-16"} bg-[#071629]`} />




      <nav className={`text-white w-full flex flex-nowrap items-center justify-center fixed top-0 backdrop-blur z-50 shadow-md ${open ? "h-52" : "h-16"}`}>
        <div className=" md:flex w-5/6 items-center justify-between px-2 hidden">
          <Image
            src={"/logo.png"}
            alt={"Islamic Qarz"}
            width={80}
            height={80}
          />

          <ul className="hidden items-center justify-between w-auto gap-4 text-sm md:flex">
            <Link href={"/explore"}>
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


        <div className="md:hidden">

          <div className="flex w-5/6 items-center justify-between px-2">
            <Image
              src={"/logo.png"}
              alt={"Islamic Qarz"}
              width={80}
              height={80}
            />
            {
              open ?
                <ul className="items-center justify-center w-auto gap-2 text-sm flex flex-col ">
                  <RxCross2 onClick={() => { setOpen(!open) }} className="size-5" />

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
                      <button className="bg-white text-[#081b33] p-2 border-2 rounded-2xl px-8 font-bold">
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
                : <CiMenuBurger onClick={() => { setOpen(!open) }} className="hover:cursor-pointer size-5" />

            }

          </div>

        </div>

      </nav>



    </>
  );
}

export default Navbar;
