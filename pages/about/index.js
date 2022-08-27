import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="Ninja List" />
      </Head>
      <main className="w-4/5 m-auto mt-24">
        <h2 className="font-bold text-3xl md:text-6xl mb-5">About</h2>
        <p className="mb-4 text-[#999]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          aliquam dolorum molestias, obcaecati ex voluptate eveniet nihil dolore
          ducimus tenetur, labore omnis quod sit explicabo!
        </p>
      </main>
    </>
  );
};

export default About;
