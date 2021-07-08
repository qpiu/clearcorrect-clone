import React, { useState, useEffect } from "react";
import styles from "./LatestNews.module.css";
import { getAllPostsFromServer } from "../lib/utils";
import News from "../components/News";
import Event from "../components/Event";

const LatestNews = (props) => {
  const [currentCategory, setCurrentCategory] = useState(3);
  const [posts, setPosts] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  let newsArray = [];
  let eventsArray = [];
  useEffect(async () => {
    const postsFromServer = await getAllPostsFromServer();
    setPosts(postsFromServer);
    postsFromServer.forEach((el) => {
      if (el.categories[0] === 3) {
        newsArray.push(el);
      } else if (el.categories[0] === 4) {
        eventsArray.push(el);
      }
    });
    let filteredNews = newsArray.slice(0, 4);
    let filteredEvents = eventsArray.slice(0, 4);
    setNews(filteredNews);
    setEvents(filteredEvents);
  }, []);

  return (
    <div className="ftco-section latest-news-section">
      <h3 className="dark-font center">Latest news</h3>
      <p className="dark-font center">各種公告事項、重要訊息、學術活動、聯誼活動。</p>
      <div>
        <div className="flex justify-content-center">
          <div className={currentCategory === 3 ? "news-select active" : "news-select"} onClick={() => setCurrentCategory(3)}>
            News
          </div>
          <div className={currentCategory === 4 ? "news-select active" : "news-select"} onClick={() => setCurrentCategory(4)}>
            Events
          </div>
        </div>
        <div className="latest-wrapper">
          <div className="container">
            <div className={currentCategory === 3 ? "show" : "hidden"}>
              {news.map((el, i) => {
                return <News key={i} post={el} index={props.index}></News>;
              })}
            </div>

            <div className={currentCategory === 4 ? "show" : "hidden"}>
              {events.map((el, i) => {
                return <Event key={i} post={el}></Event>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
