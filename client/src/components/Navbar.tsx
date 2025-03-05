"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoLogInOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <nav
        className={`text-white w-full flex flex-nowrap items-center justify-center fixed top-0 backdrop-blur z-50 shadow-md ${
          !open ? "h-64" : "h-16"
        }`}
      >
        <div className="md:flex w-5/6 items-center justify-between px-2 hidden">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt={"Islamic Qarz"}
              width={80}
              height={80}
            />
          </Link>
          <ul className="hidden items-center justify-between w-auto gap-6 text-md md:flex">
            <Link href={"/"} className="flex gap-1 items-center justify-center">
              <li>Home</li>
              <GoHomeFill className="size-4" />
            </Link>

            <Link
              href={"/explore"}
              className="flex gap-1 items-center justify-center"
            >
              <li>Explore</li>
              <FaArrowTrendUp className="size-4" />
            </Link>

            <Link
              href={"/contact"}
              className="flex gap-1 items-center justify-center"
            >
              <li>Contact</li>
              <MdEmail className="size-4" />
            </Link>
            <li>
              <Link href={"/login"}>
                <button className="bg-white text-[#081b33] p-1 border-2 rounded-3xl ml-8 px-4 font-bold flex gap-2  items-center justify-center">
                  Login
                  <IoLogInOutline className="size-4" />
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center md:hidden w-full ">
          <div className="flex w-4/5 items-center justify-between px-2">
            <Link href={"/"} className="self-start">
              <Image
                src={"/logo.png"}
                alt={"Islamic Qarz"}
                width={80}
                height={80}
              />
            </Link>
            {!open ? (
              <ul className="items-center justify-around w-auto gap-4 text-md flex flex-col">
                <RxCross2
                  onClick={() => {
                    setOpen(!open);
                  }}
                  className="size-6 self-end"
                />
                <Link
                  href={"/"}
                  className="flex gap-1 items-center justify-between w-4/5"
                >
                  <li>Home</li>
                  <GoHomeFill className="size-4" />
                </Link>
                <Link
                  href={"/explore"}
                  className="flex gap-1 items-center justify-between w-4/5"
                >
                  <li>Explore</li>
                  <FaArrowTrendUp className="size-4" />
                </Link>

                <Link
                  href={"/contact"}
                  className="flex gap-1 items-center justify-between w-4/5"
                >
                  <li>Contact</li>
                  <MdEmail className="size-4" />
                </Link>
                <li>
                  <Link href={"/login"}>
                    <button className="bg-white text-[#081b33] p-2 border-2 rounded-3xl px-4 font-bold flex gap-4 items-center ">
                      Login
                      <IoLogInOutline className="size-5" />
                    </button>
                  </Link>
                </li>
              </ul>
            ) : (
              <CiMenuBurger
                onClick={() => {
                  setOpen(!open);
                }}
                className="hover:cursor-pointer size-6"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
