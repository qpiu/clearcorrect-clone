import React from "react";
import styles from './WcaItem.module.css'
const WcaItem = (props) => {
  return (
    <div className={styles.wcaItem}>
      <img alt="ClearCorrect透明牙套的專家-透明，簡單，友善" src={`../assets/${props.el.src}`} />
      <p>{props.el.txt}</p>
    </div>
  );
};

export default WcaItem;
