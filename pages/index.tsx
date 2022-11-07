import type { NextPage } from "next";
import Head from "next/head";

const posts = [
  {
    title: "title",
    excerpt: "excerpt",
  },
];

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8">
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12"></div>
    </div>
  );
};

export default Home;
