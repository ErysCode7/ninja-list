import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="Ninja List" />
      </Head>
      <main className="w-4/5 m-auto mt-24">
          <h1 className="font-bold text-3xl md:text-6xl mb-5">Homepage</h1>
        <p className="mb-4 text-[#999]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          aliquam dolorum molestias, obcaecati ex voluptate eveniet nihil dolore
          ducimus tenetur, labore omnis quod sit explicabo!
        </p>
        <p className="mb-4 text-[#999] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          aliquam dolorum molestias, obcaecati ex voluptate eveniet nihil dolore
          ducimus tenetur, labore omnis quod sit explicabo!
        </p>
        <Link href="/ninjas">
          <a className="rounded bg-slate-300 px-5 py-2">See Ninja Listing</a>
        </Link>
      </main>
    </>
  );
};

export default Home;
