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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1 bg-yellow-700">
          {posts.map((post, i) => (
            <>
              <div className="" key={i}>
                {post.title}
              </div>
            </>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8 bg-amber-400 h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
