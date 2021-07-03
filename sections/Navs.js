import React, { useState } from "react";
import Nav from "../components/Nav";
import styles from "../sections/Navs.module.css";
const title = [
  { title: "Who we are", href: "/whoweare.html" },
  { title: "ClearCorrect", href: "/" },
  { title: "Your ClearCorrect Journey", href: "/journey.html" },
  { title: "Health and Orthodontics", href: "/blog.html" },
  { title: "Get in Touch", href: "/contact.html" },
];

export default function Navs () {
  const [ toggle, setToggle ] = useState( false );

  return (
    <ul className={ styles.navWrapper }>
      <button onClick={ () => setToggle( toggle => !toggle ) } className={ styles.toggleButton }>
        <i className="fas fa-list"></i>Menu
      </button>
      <div className={ toggle ? `${ styles.navList } ${ styles.open }` : styles.navList }>
        { title.map( ( el, i ) => {
          return <Nav el={ el } key={ i }></Nav>;
        } ) }
      </div>
    </ul>
  );
}
