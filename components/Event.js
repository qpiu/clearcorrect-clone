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
      <article className="indexnewsstyle-item">
        <div className="indexnewsstyle-item__date">
          <div>{new Date(post.date).getDate()}</div>
          <div>
            {new Date(post.date).getMonthName()}, {new Date(post.date).getFullYear()}
          </div>
        </div>

        <div className="indexnewsstyle-item__right">
          <a href={`/post/${post.id}`} className="indexnewsstyle-item__title">
            {post.title.rendered}
          </a>

          {/* <div className="indexnewsstyle-item__text"> {post.author === 1 ? "小編" : "總編"}</div> */}

          <a href={`/post/${post.id}`} className="indexnewsstyle-item__btn">
            閱讀更多
          </a>
        </div>
      </article>
    </div>
  );
};

Date.prototype.getMonthName = function () {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[this.getMonth()];
};

export default Event;
