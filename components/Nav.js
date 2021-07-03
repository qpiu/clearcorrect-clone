import React from "react";
import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <li className={props.active ? `${styles.li} ${styles.active}` : `${styles.li}`}>
      <a href={props.el.href}>{props.el.title}</a>
    </li>
  );
};

export default Nav;
