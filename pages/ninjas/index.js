import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  const data = response.data;

  return {
    props: { users: data },
  };
};

const Ninja = ({ users }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="Ninja List" />
      </Head>
      <section className="w-4/5 m-auto mt-24">
        <h1 className="font-bold text-3xl md:text-6xl mb-5">Ninja List</h1>
        {users &&
          users.map((user) => (
            <Link key={user.id} href={`/ninjas/${user.id}`}>
              <article className="bg-white mb-5 py-6 rounded px-4 lg:cursor-pointer lg:hover:scale-[102%] lg:transition-all lg:duration-300 lg:ease-in-out">
                <h3>{user.name}</h3>
              </article>
            </Link>
          ))}
      </section>
    </>
  );
};

export default Ninja;
