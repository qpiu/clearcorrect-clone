import React, { useEffect, useState } from "react";
import { getAuthor, getFeaturedImage } from "../lib/utils";

const BlogSideUnit = ( props ) => {
  const [ postImgAndAuthor, setPostImgAndAuthor ] = useState( { featImgUrl: "", author: "" } );
  useEffect( () => {
    let mounted = true;
    if ( mounted ) {
      const author = getAuthor( props.el.author );
      const featuredImg = getFeaturedImage( props.el.featured_media );
      //   resolve the promises in getAuthor and getFeaturedImg async functions using Promise.all
      Promise.all( [ author, featuredImg ] ).then( ( res ) => {
        setPostImgAndAuthor( {
          author: res[ 0 ],
          featImgUrl: res[ 1 ],
        } );
      } );
    }
    console.log( postImgAndAuthor );
    return () => {
      mounted = false;
    };
  }, [] );

  return (
    <div className="block-21 mb-4 d-flex">
      <a className="blog-img me-4" style={ { backgroundImage: `url(${ postImgAndAuthor.featImgUrl })` } }></a>
      <div className="text">
        <h3 className="heading">
          <a href={ `/post/${ props.el.id }.html` }>{ props.el.title.rendered }</a>
        </h3>
        <div className="meta">
          <div>
            <a href={ `/post/${ props.el.id }` }>
              <span className="fa fa-calendar"></span> { props.el.date }
            </a>
          </div>
          <div>
            <a href={ props.el.href }>
              <span className="fa fa-user"></span> { props.el.author }
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideUnit;
