import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6 ">
      <div className="flex ">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className=" flex items-center space-x-5 ">
        <Link href={`/`}>
          <h2 href="/">
            <span className="uppercase font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 ">
              imdb
            </span>
            <span className="capitalize text-xl hidden sm:inline  ">clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
