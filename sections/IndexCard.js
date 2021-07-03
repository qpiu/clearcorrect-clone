import React from "react";
import Fade from "react-reveal/Fade";

const IndexCard = (props) => {
  return (
    <Fade bottom>
      <div class="col-lg-4 d-flex align-items-stretch services-wrap long">
        <div class="services d-flex">
          <div class="icon">
            <span class={`flaticon-${props.el.icon}`}></span>
          </div>
          <div class="text">
            <h2>{props.el.title}</h2>
            <p class="mb-0">{props.el.content}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IndexCard;
