import React from "react";
import styles from "./SideButton.module.css";

const SideButton = (props) => {
  return (
    <div className={props.pos === 0 ? `hidden ${styles.sideButton}` : ` ${styles.sideButton}`}>
      <a href="#">Find A PROVIDER</a>
    </div>
  );
};

export default SideButton;
