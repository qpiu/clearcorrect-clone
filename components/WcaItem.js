import React from "react";
import styles from './WcaItem.module.css'
const WcaItem = (props) => {
  return (
    <div className={styles.wcaItem}>
      <img src={`./assets/${props.el.src}`} />
      <p>{props.el.txt}</p>
    </div>
  );
};

export default WcaItem;
