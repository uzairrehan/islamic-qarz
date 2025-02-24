"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosContact, IoIosContacts, IoIosInformationCircleOutline, IoMdContact } from "react-icons/io";
import { IoLogInOutline } from "react-icons/io5";
import { LuContactRound } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { SiWpexplorer } from "react-icons/si";

function Navbar() {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <>
      <nav className={` text-white w-full flex flex-nowrap items-center justify-center fixed top-0 backdrop-blur z-50 shadow-md ${!open ? "h-60" : "h-16"}`}>
        <div className="md:flex w-5/6 items-center justify-between px-2 hidden">
          <Image
            src={"/logo.png"}
            alt={"Islamic Qarz"}
            width={80}
            height={80}
          />
          <ul className="hidden items-center justify-between w-auto gap-4 text-md md:flex">
            <Link href={"/explore"} className="flex gap-1 items-center justify-center">
              <SiWpexplorer className="size-4" />
              <li>Explore</li>
            </Link>
            <Link href={"/about"} className="flex gap-1 items-center justify-center">
              <IoIosInformationCircleOutline className="size-5" />
              <li> About </li>
            </Link>
            <Link href={"/contact"} className="flex gap-1 items-center justify-center">
              <LuContactRound className="size-4" />
              <li>Contact</li>
            </Link>
            <li>
              <Link href={"/login"}>
                <button className="bg-white text-[#081b33] p-1 border-2 rounded-3xl ml-8 px-4 font-bold flex gap-2  items-center justify-center">
                  <IoLogInOutline className="size-4" />
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>




        <div className="flex items-center justify-center md:hidden w-full ">
          <div className="flex w-4/5 items-center justify-between px-2">
            <Image
              src={"/logo.png"}
              alt={"Islamic Qarz"}
              width={80}
              height={80}
              className="self-start"
            />
            {
              !open ?
                <ul className="items-center justify-around w-auto gap-4 text-md flex flex-col trans">
                  <RxCross2 onClick={() => { setOpen(!open) }} className="size-6 self-end" />
                  <Link href={"/explore"} className="flex gap-1 items-center justify-evenly w-4/5">
                    <SiWpexplorer className="size-5" />
                    <li>Explore</li>
                  </Link>
                  <Link href={"/about"} className="flex gap-1 items-center justify-evenly w-4/5">
                    <IoIosInformationCircleOutline className="size-6" />
                    <li>&nbsp; About </li>
                  </Link>
                  <Link href={"/contact"} className="flex gap-1 items-center justify-evenly w-4/5">
                    <LuContactRound className="size-5" />
                    <li>Contact</li>
                  </Link>
                  <li>
                    <Link href={"/login"}>
                      <button className="bg-white text-[#081b33] p-2 border-2 rounded-3xl px-4 font-bold flex gap-4 items-center ">
                        <IoLogInOutline className="size-5" />
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
                : <CiMenuBurger onClick={() => { setOpen(!open) }} className="hover:cursor-pointer size-6" />
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;