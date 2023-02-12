"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <div className=" py-4 ">
      <form
        onClick={handleSubmit}
        className="flex max-w-6xl mx-auto justify-between items-center px-5 space-x-3 "
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search Keywords..."
          className=" w-full h-14 rounded-lg placeholder-gray-500 outline-none bg-transparent flex-1 shadow-sm dark:shadow-gray-100 px-7 py-2 focus:shadow-lg dark:focus:shadow-amber-200 duration-500 "
        />
        <button
          type="submit"
          disabled={!search}
          className=" text-amber-600  disabled:text-gray-400 outline outline-1 outline-amber-600 disabled:outline-gray-400 px-3 py-1
          rounded-md "
        >
          {" "}
          Search{" "}
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
