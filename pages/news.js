import React, { useState, useEffect } from "react";
import News from "../components/News";
import { getPostsCount, getPostsFromServer } from "../lib/utils";
import Pagination from "../components/Pagination";
import { POST_CATEGORY } from "../lib/constants";

const news = () => {
  const [ posts, setPosts ] = useState( [] );
  const [ totalPage, setTotalPage ] = useState( null );
  const [ currentpage, setCurrentPage ] = useState( 1 );
  const goTop = () => {
    setCurrentPage( 1 );
  };
  const goLast = () => {
    setCurrentPage( totalPage );
  };
  const goPrev = () => {
    if ( currentpage > 1 ) {
      setCurrentPage( ( currentpage ) => currentpage-- );
    }
  };
  const goNext = () => {
    if ( currentpage < totalPage ) {
      setCurrentPage( ( currentpage ) => currentpage++ );
    }
  };
  const setPageFromChild = ( index ) => {
    setCurrentPage( index );
  };

  useEffect( async () => {
    const totalPageFromServer = await getPostsCount( POST_CATEGORY.news );
    setTotalPage( +totalPageFromServer.page );
    const postsFromServer = await getPostsFromServer( POST_CATEGORY.news, currentpage );
    setPosts( postsFromServer );
  }, [ currentpage ] );
  return (
    <div className="container flex-grow">
      <div className="news-wrapper flex flex-column align-item-center">
        <h3 className="dark-font center">最新消息</h3>
        <p className="dark-font center">各種公告事項、重要訊息、學術活動、聯誼活動。</p>
        { posts.map( ( el, i ) => {
          if ( el.categories[ 0 ] === 3 ) {
            return <News key={ i } post={ el }></News>;
          }
        } ) }
        <div className="flex justufy-content-center mt-3-g">
          <Pagination currentPage={ currentpage } setPageFromChild={ setPageFromChild } goNext={ goNext } goLast={ goLast } goPrev={ goPrev } goTop={ goTop } pageNum={ Math.ceil( totalPage ) } />
        </div>
      </div>
    </div>
  );
};

export default news;
