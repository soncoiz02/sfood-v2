"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import OutsideAlerter from "@/hooks/useOutsideAlerter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { collapse } from "@/redux/features/sidebar/sidebarSlice";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type NavType = {
  name: string;
  path: string;
};

const NAV: NavType[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Product",
    path: "/product?cate=all",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const pathName = usePathname();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const activeSideBar = useAppSelector((state) => state.sidebar.isActive);
  const dispatch = useAppDispatch();

  const actievLink = (path: string) => {
    return pathName === "/" ? path === pathName : path.includes(pathName);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] flex items-center bg-white z-[1000]">
      <div className="container">
        <div className="flex justify-between items-center z-[999]">
          {/* Logo */}
          <p className="text-2xl font-bold text-primary">
            S<span className="text-secondary">.Food</span>
          </p>

          {/* Nav */}
          <div className="lg:flex hidden items-center gap-x-6 justify-center">
            {NAV.map((item: NavType, index: number) => (
              <Link
                href={item.path}
                key={index}
                className={`relative font-bold text-xl ${
                  actievLink(item.path)
                    ? "text-primary after:w-full after:left-0"
                    : "after:left-[50%]"
                } hover:text-primary transition-[1s] px-4 py-2 after:content-[''] after:absolute after:-bottom-1 after:w-0 after:h-1 after:rounded-lg after:transition-[1s] after:bg-primary hover:after:w-full hover:after:left-0`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Button */}
          <div className="lg:flex hidden items-center justify-center gap-x-4">
            <Link href="/sign-in">Sign In</Link>
            <Button>
              <Link href="/sign-up" className="text-white">
                Sign Up
              </Link>
            </Button>
          </div>

          {/* Bars */}
          <FontAwesomeIcon
            icon={faBars}
            className="lg:hidden flex text-2xl text-primary cursor-pointer"
            onClick={() => dispatch(collapse(!activeSideBar))}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobile && (
        <OutsideAlerter>
          <div
            className={`bg-white fixed top-0 ${
              activeSideBar ? "left-0" : "-left-[100%]"
            } transition-[1s] w-[70%] h-screen shadow-xl flex lg:hidden flex-col justify-between p-4`}
          >
            <p className="text-2xl font-bold text-primary">
              S<span className="text-secondary">.Food</span>
            </p>
            <div className="flex flex-col items-center gap-y-6 justify-center mb-16">
              {NAV.map((item: NavType, index: number) => (
                <Link
                  href={item.path}
                  key={index}
                  onClick={() => dispatch(collapse(false))}
                  className={`relative font-bold text-xl ${
                    actievLink(item.path)
                      ? "text-primary after:w-full after:left-0"
                      : "after:left-[50%]"
                  } hover:text-primary transition-[1s] px-4 py-2 after:content-[''] after:absolute after:-bottom-1 after:w-0 after:h-1 after:rounded-lg after:transition-[1s] after:bg-primary hover:after:w-full hover:after:left-0`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-x-4 mb-8">
              <Link href="/sign-in">Sign In</Link>
              <Button>
                <Link href="/sign-up" className="text-white">
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </OutsideAlerter>
      )}
    </header>
  );
};

export default Header;
