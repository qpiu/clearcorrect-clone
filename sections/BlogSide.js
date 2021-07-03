import React from "react";
import BlogSideUnit from "../components/BlogSideUnit";

const BlogSide = (props) => {
  return (
    <div>
      {props.list.map((el, i) => {
        if (i < 4) {
          return <BlogSideUnit el={el}></BlogSideUnit>;
        }
      })}
    </div>
  );
};

export default BlogSide;
