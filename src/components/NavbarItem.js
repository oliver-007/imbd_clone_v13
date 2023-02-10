"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();

  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={` dark:hover:text-amber-600 hover:text-amber-600 font-semibold duration-200 pb-2  ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-2 decoration-amber-500  "
        }  `}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
