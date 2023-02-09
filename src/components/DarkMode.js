"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const DarkMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        currentTheme === "dark" ? (
          <BsSunFill
            className="cursor-pointer text-xl hover:text-amber-500 "
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsMoonFill
            className="cursor-pointer text-xl hover:text-amber-500 "
            onClick={() => setTheme("dark")}
          />
        )
      ) : null}
    </>
  );
};

export default DarkMode;
