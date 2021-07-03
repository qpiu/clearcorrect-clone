import React from "react";
import Fade from "react-reveal/Fade";

const IndexCard = (props) => {
  return (
    <Fade bottom>
      <div className="col-lg-4 d-flex align-items-stretch services-wrap long">
        <div className="services d-flex">
          <div className="icon">
            <span className={`flaticon-${props.el.icon}`}></span>
          </div>
          <div className="text">
            <h2>{props.el.title}</h2>
            <p className="mb-0">{props.el.content}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default IndexCard;
