import React, { useState, useEffect } from "react";
import News from "../components/News";
import { getAllPostsFromServer } from "../lib/utils";
import Pagination from "../components/Pagination";

const perPage = 2;

const news = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const blogTotal = posts.length;
  const pageNum = blogTotal / perPage;

  let items = [];
  for (let i = (page - 1) * perPage; i < page * perPage; i++) {
    if (posts[i]) {
      items.push(posts[i]); // 1 => 0, 1  // 2 => 2, 3
    }
  }

  const goTop = () => {
    setPage(1);
  };
  const goLast = () => {
    setPage(pageNum);
  };
  const goPrev = () => {
    let newPage = page;
    if (newPage > 1) {
      newPage--;
    }
    setPage(newPage);
  };
  const goNext = () => {
    let newPage = page;
    if (newPage < pageNum) {
      newPage++;
    }
    setPage(newPage);
  };
  const setPageFromChild = (index) => {
    setPage(index);
  };

  useEffect(async () => {
    const postsFromServer = await getAllPostsFromServer();
    let filteredArray = postsFromServer.filter((el) => {
      return el.categories[0] == 3;
    });
    setPosts(filteredArray);
  }, []);
  return (
    <div className="container">
      <div className="news-wrapper flex flex-column align-item-center">
        <h3 className="dark-font center">最新消息</h3>
        <p className="dark-font center">各種公告事項、重要訊息、學術活動、聯誼活動。</p>
        {items.map((el, i) => {
          if (el.categories[0] === 3) {
            return <News key={i} post={el}></News>;
          }
        })}
        <div className="flex justufy-content-center mt-3-g">
          <Pagination currentPage={page} setPageFromChild={setPageFromChild} goNext={goNext} goLast={goLast} goPrev={goPrev} goTop={goTop} pageNum={Math.ceil(pageNum)} />
        </div>
      </div>
    </div>
  );
};

export default news;
