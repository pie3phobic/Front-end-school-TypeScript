import {
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useThemeToggle } from "../../domain/useThemeToggle";
function Header() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { isDarkMode, toggleDarkMode } = useThemeToggle();
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-12 md:px-10 dark:bg-blue-950">
      <Link data-trstid="logo-link" href={{ pathname: "/" }}>
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <img
            src={`${isDarkMode ? "logo-dark.png" : "logo-study.png"}`}
            width={`${isDarkMode ? "92px" : "100px"}`}
            alt="StudyLab logo"
          />
        </div>
      </Link>
      <div className="flex items-center lg:dark:bg-gray-600 dark:border-0 md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="hidden md:flex flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 dark:text-white placeholder-gray-400 dark:placeholder-gray-200"
          type="text"
          placeholder={"Start search"}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 dark:bg-purple-accent text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <Link data-testid="courses-link" href={{ pathname: "/courses" }}>
          <p className="hidden md:inline cursor-pointer text-lg dark:text-white dark:hover:text-purple-accent">
            Courses
          </p>
        </Link>
        <div className=" flex items-center space-x-2 border-2 p-2 rounded-full  dark:text-white">
          <MenuIcon data-testid="menu-icon" className="h-6" />
          <UserCircleIcon data-testid="user-icon" className="h-6" />
        </div>
        <div className="relative flex items-center h-10 w-10 lg:w-[80.5px] rounded-3xl lg:border-y-2 lg:border-l-1 lg:border-r-2 dark:lg:border-l-2 dark:lg:border-r-2 border-0 border-gray-200">
          <div className="absolute h-10 w-10 flex items-center justify-center transition-all duration-500">
            {!isDarkMode && (
              <MoonIcon
                className="z-50 h-10 p-2 border-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-gray-950 transform translate-x-0"
                onClick={toggleDarkMode}
              />
            )}
            {isDarkMode && (
              <SunIcon
                className="z-50 h-10 p-2 border-2 rounded-full hover:bg-gray-100 dark:text-white dark:hover:bg-gray-950 transform translate-x-0 lg:translate-x-full"
                onClick={toggleDarkMode}
              />
            )}
          </div>
          <div
            className={`absolute h-10 w-10 rounded-fulltransition-all duration-300  ${
              isDarkMode ? "right-0" : "left-0"
            }`}
          ></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
