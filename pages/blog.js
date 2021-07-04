import Head from "next/head";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { getAllPostsFromServer } from "../lib/utils";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";
import Pagination from "../components/Pagination";
import BlogSide from "../sections/BlogSide";
import Fade from "react-reveal/Fade";
const perPage = 2;

export default function Blog(props) {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      let result = postsFromServer.filter(el => el.categories[0] === 2);
      setPosts(result);
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

  console.log(posts)

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
          <div className="flex mobile-block">
            {posts && (
              <Fade bottom>
                <div className="blogs">
                  {items.map((post, id) => {
                    return (
                      <div className="blog" key={id}>
                        <Post post={post} />
                      </div>
                    );
                  })}
                </div>
              </Fade>
            )}
            <div className="blog-side">
              <BlogSide list={posts}></BlogSide>
            </div>
          </div>
        </div>
        <div className="flex justufy-content-center">
          <Pagination currentPage={page} setPageFromChild={setPageFromChild} goNext={goNext} goLast={goLast} goPrev={goPrev} goTop={goTop} pageNum={Math.ceil(pageNum)} />
        </div>
      </main>
    </div>
  );
}
