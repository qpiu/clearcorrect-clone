import React, { useState, useEffect } from "react";
import styles from "./LatestNews.module.css";
import { getAllPostsFromServer } from "../lib/utils";
import News from "../components/News";
import Event from '../components/Event'

const LatestNews = () => {
  const [currentCategory, setCurrentCategory] = useState(3);

  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const postsFromServer = await getAllPostsFromServer();
    console.log(postsFromServer);
    setPosts(postsFromServer);
  }, []);
  return (
    <div>
      <h3 className="mt-4 center">Latest news</h3>
      <p className="center">lorem fsaf sdfsafsdf fsadfsdfsdaf fsadfsdfwqerw fasdfsdf</p>
      <div>
        <div className="flex justify-content-center">
          <div className={currentCategory===3 ? 'news-select active': 'news-select'} onClick={() => setCurrentCategory(3)}>News</div>
          <div className={currentCategory===4 ? 'news-select active': 'news-select'} onClick={() => setCurrentCategory(4)}>Events</div>
        </div>
        <div className="latest-wrapper">
          <div className="container">
            {posts.map((el, i) => {
              if (el.categories[0] === currentCategory && currentCategory===3) {
                return <News post={el}></News>;
              } else if (el.categories[0] === currentCategory && currentCategory===4) {
                return <Event post={el}></Event>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
