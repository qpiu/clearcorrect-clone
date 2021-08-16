import React, { useState, useEffect } from "react";
import News from "../components/News";
import { getPostsCount, getPostsFromServer } from "../lib/utils";
import Pagination from "../components/Pagination";
import { POST_CATEGORY } from "../lib/constants";
import LatestNews from "../sections/LatestNews";

const news = () => {
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(null);
  const [currentpage, setCurrentPage] = useState(1);
  const goTop = () => {
    setCurrentPage(1);
  };
  const goLast = () => {
    setCurrentPage(totalPage);
  };
  const goPrev = () => {
    if (currentpage > 1) {
      setCurrentPage((currentpage) => currentpage--);
    }
  };
  const goNext = () => {
    if (currentpage < totalPage) {
      setCurrentPage((currentpage) => currentpage++);
    }
  };
  const setPageFromChild = (index) => {
    setCurrentPage(index);
  };

  useEffect(async () => {
    const totalPageFromServer = await getPostsCount(POST_CATEGORY.news);
    setTotalPage(+totalPageFromServer.page);
    const postsFromServer = await getPostsFromServer(POST_CATEGORY.news, currentpage);
    setPosts(postsFromServer);
  }, [currentpage]);
  return (
    <>
      <LatestNews index></LatestNews>
    </>
  );
};

export default news;
