import React from "react";
import styles from "./SideButton.module.css";

const SideButton = (props) => {
  return (
    <div className={props.pos === 0 ? `hidden ${styles.sideButton}` : ` ${styles.sideButton}`}>
      <a href="/contact">Get  in  touch</a>
    </div>
  );
};

export default SideButton;
