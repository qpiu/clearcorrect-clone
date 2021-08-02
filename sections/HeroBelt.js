import React from "react";
import styles from "./HeroBelt.module.css";
import Fade from 'react-reveal/Fade'

const HeroBelt = () => {
  return (
    <section className={styles.heroBeltSection}>
      <div className="overlay hero-2"></div>
      <div className="container flex mobile-block justify-content-center">
        <Fade bottom>
          <div className={styles.txtWrap}>
            <span>享樂人生 因齒完美</span>
            <h1>別再猶豫！立刻諮詢展開您的矯正旅程</h1>
          </div>
        </Fade>
        <div className={styles.btnWrap}>
          <p>
            <a href="/contact">聯絡我們</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBelt;
