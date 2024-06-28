"use client";
import React, { useState, useEffect } from "react";

//Components
import Logo from "./Logo";
import ThemesToggler from "./ThemesToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      return () => {
        window.removeEventListener("scroll", scrollYPos);
      };
    });
  }, []);
  console.log(pathname);
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${
        pathname === "/" && "bg-[#FDF9F5]" // Fix the conditional here
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles={"relative hover:text-primary transition-all"}
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemesToggler />

            {/* MobileNav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
