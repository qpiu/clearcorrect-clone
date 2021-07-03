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
            <span>BOOK YOUR APPOINTMENT</span>
            <h1>Do not wait; make an appointment today!</h1>
          </div>
        </Fade>
        <div className={styles.btnWrap}>
          <p>
            <a href="/contact">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBelt;
