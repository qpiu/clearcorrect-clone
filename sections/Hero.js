import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className="section">
      <div className={styles.heroWrap}>
        <div className="overlay"></div>
        <div className="container">
          <div className={styles.txtFlex}>
            <div className={styles.txtWrap}>
              <div>I am breadcrum</div>
              <h1>Who We Are</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
