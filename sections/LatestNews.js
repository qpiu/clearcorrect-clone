import React, { useState, useEffect } from "react";
import { getPostsFromServer } from "../lib/utils";
import News from "../components/News";
import Event from "../components/Event";

const LatestNews = ( props ) => {
  const [ currentCategory, setCurrentCategory ] = useState( POST_CATEGORY.News );
  const [ posts, setPosts ] = useState( [] );
  const [ news, setNews ] = useState( [] );
  const [ events, setEvents ] = useState( [] );
  let newsArray = [];
  let eventsArray = [];
  useEffect( async () => {
    const postsFromServer = await getPostsFromServer( currentCategory, 1 );
    setPosts( postsFromServer );
    postsFromServer.forEach( ( el ) => {
      if ( el.categories[ 0 ] === POST_CATEGORY.News ) {
        newsArray.push( el );
      } else if ( el.categories[ 0 ] === POST_CATEGORY.Event ) {
        eventsArray.push( el );
      }
    } );
    let filteredNews = newsArray.slice( 0, 4 );
    let filteredEvents = eventsArray.slice( 0, 4 );
    setNews( filteredNews );
    setEvents( filteredEvents );
  }, [ currentCategory ] );

  return (
    <div className="ftco-section latest-news-section">
      <h3 className="dark-font center">最新消息</h3>
      <p className="dark-font center">各種公告事項、重要訊息、學術活動、聯誼活動。</p>
      <div>
        <div className="flex justify-content-center">
          <div className={ currentCategory === POST_CATEGORY.News ? "news-select active" : "news-select" } onClick={ () => setCurrentCategory( POST_CATEGORY.News ) }>
            News
          </div>
          <div className={ currentCategory === POST_CATEGORY.Event ? "news-select active" : "news-select" } onClick={ () => setCurrentCategory( POST_CATEGORY.Event ) }>
            Event
          </div>
        </div>
        <div className="latest-wrapper">
          <div className="container">
            <div className={ currentCategory === POST_CATEGORY.News ? "show" : "hidden" }>
              { news.map( ( el, i ) => {
                return <News key={ i } post={ el } index={ props.index }></News>;
              } ) }
            </div>

            <div className={ currentCategory === POST_CATEGORY.Event ? "show" : "hidden" }>
              { events.map( ( el, i ) => {
                return <Event key={ i } post={ el }></Event>;
              } ) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
