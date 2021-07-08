import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";

export default function News({ post }) {
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
    <article className="indexnewstabs-item">
      <div className="indexnewstabs-item__info">
        <div className="indexnewstabs-item__info-tag"></div>
        <div className="indexnewstabs-item__info-title">
          <a href={`/post/${post.id}`}>
            <h3>{post.title.rendered}</h3>
          </a>
        </div>
        <div className="indexnewstabs-item__info-date">
          <div>{new Date(post.date).getDate()}</div>
          <div>
            {new Date(post.date).getMonthName()}, {new Date(post.date).getFullYear()}
          </div>
        </div>
      </div>
      <a href={`/post/${post.id}`} className="indexnewstabs-item__imgbox">
        <div className="indexnewstabs-item__img" style={{ backgroundImage: `url(${postImgAndAuthor.featImgUrl})` }} href={`/post/${post.id}`}></div>
      </a>
    </article>
  );
}

Date.prototype.getMonthName = function () {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return monthNames[this.getMonth()];
};
