import axios from "axios";
import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  const data = response.data;

  const path = data.map((user) => {
    return {
      params: { ninjaDetails: user.id.toString() },
    };
  });

  return {
    paths: path,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.ninjaDetails;

  if (id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = response.data;

    return {
      props: { user: data },
    };
  }
};

const Details = ({ user }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="Ninja List" />
      </Head>
      <main className="w-4/5 m-auto mt-24">
        <h2 className="font-bold text-3xl md:text-5xl mb-5">Details</h2>
        {user.name && <h3 className="text-2xl mb-4">{user.name}</h3>}
        {user.email && <h3 className="text-1xl">{user.email}</h3>}
      </main>
    </>
  );
};

export default Details;
