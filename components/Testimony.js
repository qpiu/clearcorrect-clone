import React from "react";
import styles from "./Testimony.module.css";
const Testimony = (props) => {
  return (
    <div className={styles.testimonyWrap}>
      <div className={styles.testimonyDesc}>
        <div className={styles.icon}>
          <span>
            <i className="fas fa-quote-left"></i>
          </span>
        </div>
        <h5>{props.el.name}</h5>
        <p>{props.el.txt}</p>
      </div>
      <div>
        <div className={styles.userImg}>
          <img alt="ClearCorrect透明牙套的專家-透明，簡單，友善" src={`../assets/${props.el.src}`} />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
