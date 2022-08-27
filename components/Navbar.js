import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-28">
      <div className="h-full flex  flex-row justify-between items-center w-4/5 m-auto border-b border-[#999]">
        <h1 className="text-[40px] font-bold">Ninja List</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/ninjas">Ninja List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
