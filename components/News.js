import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";
import parse from "html-react-parser";
import styles from "./News.module.css";

export default function News({ post }) {
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
    // <div className="news-wrapper">
    //   {/* <img className="excerpt-img mb-5" src={postImgAndAuthor ? postImgAndAuthor.featImgUrl : "/aeeiee-logo.png"} /> */}

    //   <div className="post-txt">
    //     <div className="flex">
    //       <h4>
    //         <i className="fas fa-calendar-alt"></i>
    //         {new Date(post.date).toDateString()}
    //       </h4>
    //       <h4>
    //         <i className="fas fa-user"></i>
    //         {post.author === 1 ? "Marketing" : "KKK"}
    //       </h4>
    //     </div>

    //     <h3>
    //       <Link href={`/post/${post.id}`}>
    //         <a className="text-4xl font-bold">{post.title.rendered}</a>
    //       </Link>
    //     </h3>
    //     <div className="mt-2 relative">
    //       <div className="mb-2 max-w-lg">{parse(post.excerpt.rendered.substring(0, 100) + "...")}</div>
    //     </div>
    //   </div>
    //   <a className={styles.blogEntry} style={{ backgroundImage: `url(${postImgAndAuthor.featImgUrl})` }} href={`/post/${post.id}`}></a>
    // </div>
    <article className="indexnewstabs-item">
      <div className="indexnewstabs-item__info">
        <div className="indexnewstabs-item__info-tag" ></div>

        <div className="indexnewstabs-item__info-title">
          <a href="https://www.thda.org.tw/lecture/detail/174">
            <h3>{post.title.rendered}</h3>
          </a>
        </div>

        <div className="indexnewstabs-item__info-date">{new Date(post.date).toDateString()}</div>
      </div>

      <a href="" className="indexnewstabs-item__imgbox">
        <div className="indexnewstabs-item__img" style={{ backgroundImage: `url(${postImgAndAuthor.featImgUrl})` }} href={`/post/${post.id}`}></div>
      </a>
    </article>
  );
}
