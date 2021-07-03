import React from "react";
import styles from "./Step.module.css";
export default function Step(props) {
  return (
    <div className={props.dir === "normal" ? styles.stepWrap : styles.stepWrapReverse}>
      <div className={styles.stepTxt}>
        <div>
          <h3>{props.el.title}</h3>
          <p>{props.el.txt}</p>
          <ul className={styles.stepUl}>
            {props.el.list.map((el, i) => {
              return (
                <li className={styles.stepList} key={i}>
                  <i className="fas fa-arrow-circle-right"></i>
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={`${styles.stepImg} ${props.el.src}`}></div>
    </div>
  );
}
