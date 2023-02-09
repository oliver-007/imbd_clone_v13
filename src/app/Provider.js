"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" dark:bg-gray-800 dark:text-gray-200 text-gray-700 transition-colors duration-500 ease-linear  min-h-screen select-none ">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
