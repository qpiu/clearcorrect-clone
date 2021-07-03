import React, { useState, useEffect } from "react";
import styles from "./LatestNews.module.css";
import { getAllPostsFromServer } from "../lib/utils";

const LatestNews = () => {
  const [showNews, setShowNews] = useState(0);
  const [news, setNews] = useState([]);
  const [campaign, setCampaign] = useState([]);

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    let mounted = true;
    if (mounted) {
      const postsFromServer = await getAllPostsFromServer();
      console.log(postsFromServer);
      setPosts(postsFromServer)
      console.log(posts)
      //   postsFromServer.map((el, i) => {
      //     if (el.categories[0] === 1) {
      //       let editNews = news;
      //       editNews.push(el);
      //       setNews(editNews);
      //     } else if (el.categories[0] === 2) {
      //       let editCampaign = campaign;
      //       editCampaign.push(el);
      //       setCampaign(editCampaign);
      //     }
      //   });
    }

    return () => (mounted = false);
  }, []);
  let currentArray = showNews ? news : campaign;

  return (
    <div>
      <h3>Latest news</h3>
      <p>lorem fsaf sdfsafsdf fsadfsdfsdaf fsadfsdfwqerw fasdfsdf</p>
      <div>
        <div className={styles.newSelector}>
          <div onClick={() => setShowNews(0)}>News</div>
          <div onClick={() => setShowNews(1)}>Events</div>
        </div>
        {currentArray.map((el, i) => {
          return <Post post={el}></Post>;
        })}
      </div>
    </div>
  );
};

export default LatestNews;
