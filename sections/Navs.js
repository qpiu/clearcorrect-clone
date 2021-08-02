import React, { useState } from "react";
import Nav from "../components/Nav";
import styles from "../sections/Navs.module.css";
const title = [
  { title: "關於我們", href: "/whoweare/" },
  { title: "ClearCorrect", href: "/" },
  { title: "最新消息", href: "/news/" },
  { title: "樂齒之旅", href: "/journey/" },
  { title: "健康與矯正", href: "/blog/" },
  { title: "聯絡我們", href: "/contact/" },
];

export default function Navs ( props ) {
  const [ toggle, setToggle ] = useState( false );

  return (
    <ul className={ styles.navWrapper }>
      <button onClick={ () => setToggle( ( toggle ) => !toggle ) } className={ styles.toggleButton }>
        <i className="fas fa-list"></i>Menu
      </button>
      <div onClick={ () => setToggle( ( toggle ) => !toggle ) } className={ toggle ? `${ styles.navList } ${ styles.open }` : styles.navList }>
        { title.map( ( el, i ) => {
          return <Nav active={ props.currentRoute === el.href } el={ el } key={ i }></Nav>;
        } ) }
      </div>
    </ul>
  );
}
