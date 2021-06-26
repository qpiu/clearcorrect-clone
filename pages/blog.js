import Head from "next/head";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { getAllPostsFromServer } from "../lib/utils";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";
export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
    }
    return () => (mounted = false);
  }, []);

  return (
    <div>
      <Head>
        <title>ClearCorrect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="Health & Orthodontics" page="journey"></Hero>

      <HeroBelt></HeroBelt>
      <main className="ftca-section ">
        <div className="container">
          <div className="flex">
            {posts && (
              <div className="blogs">
                {posts.map((post, id) => {
                  return (
                    <div className="blog" key={id}>
                      <Post post={post} />
                    </div>
                  );
                })}
              </div>
            )}
            <div className="blog-side">i am blog side</div>
          </div>
        </div>
      </main>
    </div>
  );
}
