import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="hidden lg:block p-2 md:p-10 py-6 overflow-y-auto">
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="hidden md:inline text-center dark:text-white text-3xl mt-2 mb-2 font-semibold">
          Explore
        </h1>
        <h2 className="hidden md:inline text-center text-xs dark:text-white">
          Start studying right now
        </h2>
      </div>
      <div className="bg-gray-100 px-10 py-8 rounded-3xl w-[250px] text-center font-semibold dark:bg-gray-950">
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6 hover:bg-red-400/50 transition duration-150 cursor-pointer dark:bg-gray-400/70 dark:hover:bg-purple-accent/70">
          <p className="text-gray-700 dark:text-white">Arts & Humanities</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer dark:bg-gray-400/70 dark:hover:bg-purple-accent/70">
          <p className="text-gray-700  dark:text-white">Business</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer  dark:bg-gray-400/70 dark:hover:bg-purple-accent/70">
          <p className="text-gray-700  dark:text-white">Computer Science</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer  dark:bg-gray-400/70 dark:hover:bg-purple-accent/70">
          <p className="text-gray-700  dark:text-white">Data Science</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl mb-6  hover:bg-red-400/50 transition duration-150 cursor-pointer  dark:bg-gray-400/70 dark:hover:bg-purple-accent/70">
          <p className="text-gray-700  dark:text-white">Health</p>
        </div>
        <div className="bg-gray-300/60 py-2 px-2 rounded-xl  hover:bg-red-400/50 transition duration-150 cursor-pointer  dark:bg-purple-accent/70 dark:hover:bg-purple-accent">
          <Link href={{ pathname: "/courses" }}>
            <p className="text-red-400 dark:text-white">Explore All</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
