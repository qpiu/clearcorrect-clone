import React from "react";
import styles from "./Hero.module.css";
import Breadcrumbs from "nextjs-breadcrumbs";

var findOne = function (haystack, arr) {
  return arr.some(function (v) {
      return haystack.indexOf(v) >= 0;
  });
};


const Hero = (props) => {
  return (
    <div className="section">
      <div className={`${styles.heroWrap} ${props.page}`}>
        <div className="overlay"></div>
        <div className="container">
          <div className={styles.txtFlex}>
            <div className={styles.txtWrap}>
              <Breadcrumbs useDefaultStyle transformLabel={(title) => (title === "Home" || title === "post") ? (title + " >") : (props.title + ' >')}></Breadcrumbs>
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
