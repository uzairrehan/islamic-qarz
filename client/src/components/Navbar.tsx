import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-[#081b33] text-white h-16 flex flex-nowrap items-center justify-center">
      <div className="flex w-5/6  items-center justify-between">
        <div>
          <Image
            src={"/logo.png"}
            alt={"Islamic Qarz"}
            width={80}
            height={80}
          />
        </div>
        <ul className="flex items-center justify-between w-auto gap-4 text-sm">
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
  );
}

export default Navbar;
