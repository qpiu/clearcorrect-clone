import Head from "next/head";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { getPostsFromServer, getPostsCount } from "../lib/utils";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";
import Pagination from "../components/Pagination";
import BlogSide from "../sections/BlogSide";
import { POST_CATEGORY } from "../lib/constants";

export default function Blog () {
  const [ posts, setPosts ] = useState( [] );
  const [ totalPage, setTotalPage ] = useState( null );
  const [ currentpage, setCurrentPage ] = useState( 1 );
  useEffect( async () => {
    const totalPageFromServer = await getPostsCount( POST_CATEGORY.blog );
    setTotalPage( +totalPageFromServer.page );
    const postsFromServer = await getPostsFromServer( POST_CATEGORY.blog, currentpage );
    setPosts( postsFromServer );
  }, [ currentpage ] );
  console.log(posts)
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

  return (
    <div>
      <Head>
        <title>ClearCorrect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero title="健康與矯正" page="journey"></Hero>
      <main className="ftca-section ">
        <div className="container">
          <div className="flex mobile-block">
            <div className="blogs">
              <div className="blogs-inner">
                { posts.map( ( post, id ) => {
                  return (
                    <div className="blog-list" key={ id }>
                      <Post post={ post } />
                    </div>
                  );
                } ) }
              </div>
              <div className="flex justufy-content-center">
                <Pagination currentPage={ currentpage } setPageFromChild={ setPageFromChild } goNext={ goNext } goLast={ goLast } goPrev={ goPrev } goTop={ goTop } pageNum={ Math.ceil( totalPage ) } />
              </div>
            </div>
            <div className="blog-side">
              <BlogSide list={ posts }></BlogSide>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
