import React from "react";
import styles from './Wcc.module.css'

const Wcc = (props) => {
  return (
    <div className={styles.wcc}>
      <img alt="ClearCorrect透明牙套的專家-透明，簡單，友善" src={`../assets/${props.el.src}`} />
      <div>
        <h5>{props.head}</h5>
        <p>{props.el.txt}</p>
      </div>
    </div>
  );
};

export default Wcc;
