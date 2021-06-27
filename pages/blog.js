import Head from "next/head";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { getAllPostsFromServer } from "../lib/utils";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";
import Pagination from "../components/Pagination";

const perPage = 2;

export default function Blog(props) {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      setPosts(postsFromServer);
      console.log(posts)
    }
    
    return () => (mounted = false);
  }, []);

  const [page, setPage] = useState(1);
  const blogTotal = posts.length;
  const pageNum = blogTotal / perPage;

  let items = [];
  for (let i = (page - 1) * perPage; i < page * perPage; i++) {
    if (posts[i]) {
      items.push(posts[i]); // 1 => 0, 1  // 2 => 2, 3
    }
  }
  useEffect(() => {
    setPage(1);
  }, [posts]);

  const goTop = () => {
    setPage(1);
  };
  const goLast = () => {
    setPage(pageNum);
  };
  const goPrev = () => {
    let newPage = page;
    if (newPage > 1) {
      newPage--;
    }
    setPage(newPage);
  };
  const goNext = () => {
    let newPage = page;
    if (newPage < pageNum) {
      newPage++;
    }
    setPage(newPage);
  };
  const setPageFromChild = (index) => {
    setPage(index);
  };

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
                {items.map((post, id) => {
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
        <div className="flex flex-justufy-center">
          <Pagination currentPage={page} setPageFromChild={setPageFromChild} goNext={goNext} goLast={goLast} goPrev={goPrev} goTop={goTop} pageNum={Math.ceil(pageNum)} />
        </div>
      </main>
    </div>
  );
}
