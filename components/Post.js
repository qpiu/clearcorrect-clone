import Link from "next/link";
import { useState, useEffect } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";
import parse from "html-react-parser";
import styles from "./Post.module.css";

export default function Post ( { post } ) {
  const [ postImgAndAuthor, setPostImgAndAuthor ] = useState( { featImgUrl: "", author: "" } );
  useEffect( () => {
    let mounted = true;
    if ( mounted ) {
      const author = getAuthor( post.author );
      const featuredImg = getFeaturedImage( post.featured_media );
      Promise.all( [ author, featuredImg ] ).then( ( res ) => {
        setPostImgAndAuthor( {
          author: res[ 0 ],
          featImgUrl: res[ 1 ],
        } );
      } );
    }
    return () => {
      mounted = false;
    };
  }, [ post ] );
  return (
    <div className={ styles.post }>
      <div className={ styles.border }>
        <a className={ styles.blogEntry } style={ { backgroundImage: `url(${ postImgAndAuthor.featImgUrl })` } } href={ `/post/${ post.id }` }></a>
        <div className={ styles.postTxt }>
          <div className="flex">
            <h4>
              <i className="fas fa-calendar-alt"></i>
              { new Date( post.date ).toDateString() }
            </h4>
            {/* <h4>
              <i className="fas fa-user"></i>
              { post.author === 1 ? "小編" : "總編" }
            </h4> */}
          </div>
          <h3>
            <Link href={ `/post/${ post.id }` }>
              <a href={ `/post/${ post.id }` } className="text-4xl font-bold">{ post.title.rendered }</a>
            </Link>
          </h3>
          <div className="mt-2 relative">
            <div className="mb-2 max-w-lg">{ parse( post.excerpt.rendered.substring( 0, 100 ) + "..." ) }</div>
          </div>
        </div>
      </div>
    </div>
  );
}
