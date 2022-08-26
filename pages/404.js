import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Erropage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="mt-[100px] w-4/5 m-auto">
      <h1 className="text-6xl mb-4 font-extrabold">Oops!</h1>
      <h2 className="text-[20px]">404, Error not found.</h2>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
};

export default Erropage;
