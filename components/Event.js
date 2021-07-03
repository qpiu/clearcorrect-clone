import React from "react";
import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";

const Event = ({ post }) => {
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
    <div>
      <article class="indexnewsstyle-item">
        <div class="indexnewsstyle-item__date">
          <div>{new Date(post.date).getDate()}</div>
          <div>{new Date(post.date).getMonth() + 1} / {new Date(post.date).getFullYear()}</div>
          <div></div>
        </div>

        <div class="indexnewsstyle-item__right">
          <a href="https://www.thda.org.tw/news/detail/1389" class="indexnewsstyle-item__title">
            {post.title.rendered}
          </a>

          <div class="indexnewsstyle-item__text"> {post.author === 1 ? "Marketing" : "KKK"}</div>

          <a href="https://www.thda.org.tw/news/detail/1389" class="indexnewsstyle-item__btn">
            閱讀更多
          </a>
        </div>
      </article>
    </div>
  );
};

export default Event;
