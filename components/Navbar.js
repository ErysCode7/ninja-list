import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[100px] ">
      <div className="flex items-center justify-between h-full w-4/5 m-auto border-b border-solid border-[lightgray]">
        <div className="">
          <h1>Ninja List</h1>
        </div>
        <ul className="flex items-center mt-8 gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/ninjas">Ninja Listing</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
