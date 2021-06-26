import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";
import parse from "html-react-parser";
import styles from "./Post.module.css";

export default function Post({ post }) {
  const [postImgAndAuthor, setPostImgAndAuthor] = useState({ featImgUrl: "", author: "" });
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const author = getAuthor(post.author);
      const featuredImg = getFeaturedImage(post.featured_media);
      //   resolve the promises in getAuthor and getFeaturedImg async functions using Promise.all
      Promise.all([author, featuredImg]).then((res) => {
        setPostImgAndAuthor({
          author: res[0],
          featImgUrl: res[1],
        });
      });
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className={styles.post}>
      <a className={styles.blogEntry} style={{backgroundImage: `url(${postImgAndAuthor.featImgUrl})`}} href={`/post/${post.id}`}></a>
      {/* <img className="excerpt-img mb-5" src={postImgAndAuthor ? postImgAndAuthor.featImgUrl : "/aeeiee-logo.png"} /> */}

      <div className={styles.postTxt}>
        <h3>
          <Link href={`/post/${post.id}`}>
            <a className="text-4xl font-bold">{post.title.rendered}</a>
          </Link>
        </h3>
        <h4>{new Date(post.date).toDateString()}</h4>
        <div className="mt-2 relative">
          <div className="mb-2 max-w-lg">{parse(post.excerpt.rendered)}</div>
        </div>
      </div>
    </div>
  );
}
