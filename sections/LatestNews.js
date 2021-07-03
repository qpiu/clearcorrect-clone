import React, { useState, useEffect } from "react";
import styles from "./LatestNews.module.css";
import { getAllPostsFromServer } from "../lib/utils";
import Post from "../components/Post";

const LatestNews = () => {
  const [currentCategory, setCurrentCategory] = useState(3);
  const [news, setNews] = useState([]);
  const [campaign, setCampaign] = useState([]);

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const postsFromServer = await getAllPostsFromServer();
    console.log(postsFromServer);
    setPosts(postsFromServer);
  }, []);


  return (
    <div>
      <h3>Latest news</h3>
      <p>lorem fsaf sdfsafsdf fsadfsdfsdaf fsadfsdfwqerw fasdfsdf</p>
      <div>
        <div className={styles.newSelector}>
          <div onClick={() => setCurrentCategory(3)}>News</div>
          <div onClick={() => setCurrentCategory(4)}>Events</div>
        </div>
        {posts.map((el, i) => {
          if (el.categories[0] === currentCategory) {
            return <Post post={el}></Post>;
          }
        })}
      </div>
    </div>
  );
};

export default LatestNews;
