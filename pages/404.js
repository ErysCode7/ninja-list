import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Errorpage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>404 page Error </title>
        <meta name="keywords" content="Ninja List" />
      </Head>
      <div className="w-4/5 m-auto mt-24">
        <h1 className="font-bold text-3xl md:text-6xl mb-5">Oops!</h1>
        <h2 className="mb-4 text-[#999]">404, Page not found</h2>
        <Link href="/">Please navigate back to home</Link>
      </div>
    </>
  );
};

export default Errorpage;
