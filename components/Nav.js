import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = ( props ) => {
  return (
    <li className={ props.active ? `${ styles.li } ${ styles.active }` : `${ styles.li }` }>
      <Link href={ props.el.href }>
        <a >{ props.el.title }</a>
      </Link>

    </li>
  );
};

export default Nav;
