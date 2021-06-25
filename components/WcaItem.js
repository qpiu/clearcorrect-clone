import React from "react";

const WcaItem = (props) => {
  return (
    <div>
      <img src={`./assets/${props.el.src}`} />
      <p>{props.el.txt}</p>
    </div>
  );
};

export default WcaItem;
