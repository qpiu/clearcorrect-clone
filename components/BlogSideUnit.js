import React from "react";

const BlogSideUnit = () => {
  return (
    <div class="block-21 mb-4 d-flex">
      <a class="blog-img me-4" style={{ backgroundImage: `url('${props.el.bg}')` }}></a>
      <div class="text">
        <h3 class="heading">
          <a href={props.el.href}>{props.el.title}</a>
        </h3>
        <div class="meta">
          <div>
            <a href={props.el.href}>
              <span class="fa fa-calendar"></span> {props.el.time}
            </a>
          </div>
          <div>
            <a href={props.el.href}>
              <span class="fa fa-user"></span> {props.el.author}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSideUnit;
