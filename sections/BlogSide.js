import React from "react";
import BlogSideUnit from "../components/BlogSideUnit";

const BlogSide = (props) => {
  return (
    <div className="sidebar-box">
      <h3>Recent articles</h3>
      {props.list.map((el, i) => {
        if (i < 4) {
          return <BlogSideUnit key={i} el={el}></BlogSideUnit>;
        }
      })}
    </div>
  );
};

export default BlogSide;
