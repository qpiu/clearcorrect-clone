import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import parse from "html-react-parser";
import { getAllPostsFromServer, getAuthor, getFeaturedImage } from "../../lib/utils";
import { POSTS_API_URL } from "../../lib/constants";
import Hero from "../../sections/Hero";
import BlogSide from "../../sections/BlogSide";

export default function Post({ title, featuredImg, author, content, date, categories }) {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      let result = postsFromServer.filter((el) => el.categories[0] === categories);
      setPosts(result);
    }

    return () => (mounted = false);
  }, []);
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title={title}></Hero>
      <main className="ftca-section">
        <section className="flex container mobile-block">
          <div className="blogs mr-5">
            <p>
              <img src={featuredImg} />
            </p>
            {/* <p className="text-sm mt-5">Written by {author}</p>
            <p className="text-sm font-semibold mb-5">Published on {new Date(date).toDateString()}</p> */}
            <h2 className="dark-font">{title}</h2>
            <div>{parse(content)}</div>
          </div>

          <div className="blog-side">
            <BlogSide list={posts}></BlogSide>
          </div>
        </section>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await axios.get(POSTS_API_URL);
  const posts = res.data;
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}
// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await axios.get(`${POSTS_API_URL}/${params.id}`);
  const post = await res.data;
  const featuredImg = await getFeaturedImage(post.featured_media);
  const author = await getAuthor(post.author);
  return {
    props: {
      title: post.title.rendered,
      content: post.content.rendered,
      featuredImg,
      author,
      date: post.date,
      categories: post.categories[0],
    },
  };
}
