import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="mt-[100px] w-4/5 m-auto">
      <h1 className="text-[2rem] font-[800] mb-4">Homepage</h1>
      <p className="text-[#999] mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dolores, neque sunt tempore vitae necessitatibus ab, mollitia earum,
        assumenda ipsum impedit. Doloremque eius soluta asperiores earum, at
        accusantium magnam magni.
      </p>
      <div className="text-center">
        <Link href="/ninjas">
          <a className="text-slate-900 bg-slate-400 text-white px-5 py-2 rounded">
            See Ninja Listing
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Home;
