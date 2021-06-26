import React from "react";
import styles from "./Hero.module.css";
const Hero = (props) => {
  return (
    <div className="section">
      <div className={`${styles.heroWrap} ${props.page}`}>
        <div className="overlay"></div>
        <div className="container">
          <div className={styles.txtFlex}>
            <div className={styles.txtWrap}>
              <div>I am breadcrum</div>
              <h1>{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
