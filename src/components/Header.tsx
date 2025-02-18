"use client";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  pathName: string;
}

function Header({ pathName }: HeaderProps) {
  const [hideMenu, setHideMenu] = useState(true);

  const isPageSelected = (page: string) => {
    if (pathName === page) {
      return "font-bold text-white";
    }
    return "";
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span
          data-testid="header-title"
          className="font-semibold text-xl tracking-tight"
        >
          👨‍🍳 Next chef
        </span>
      </div>
      <div className="block lg:hidden" onClick={() => setHideMenu(!hideMenu)}>
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          hideMenu && "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <Link data-testid="home-link" href="/">
            <p
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${isPageSelected(
                "/"
              )}`}
            >
              Home
            </p>
          </Link>
          <Link href="/recipes">
            <p
              className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ${isPageSelected(
                "/recipes"
              )}`}
            >
              Recipes
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
