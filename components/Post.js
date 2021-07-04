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
      //   resolve the promises in getAuthor and getFeaturedImg async functions using Promise.all
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
  }, [] );
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
            <h4>
              <i className="fas fa-user"></i>
              { post.author === 1 ? "Marketing" : "KKK" }
            </h4>
          </div>

          <h3>
            <Link href={ `/post/${ post.id }` }>
              <a className="text-4xl font-bold">{ post.title.rendered }</a>
            </Link>
          </h3>
          <div className="mt-2 relative">
            <div className="mb-2 max-w-lg">{ parse( post.excerpt.rendered.substring(0, 100) + '...')  }</div>
          </div>
        </div>
      </div>
    </div>
  );
}
