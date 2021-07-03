import React from "react";
import styles from "./HeroBelt.module.css";
const HeroBelt = () => {
  return (
    <section className={styles.heroBeltSection}>
      <div className="overlay hero-2"></div>
      <div className="container flex mobile-block flex-justify-center">
        <div className={styles.txtWrap}>
          <span>BOOK YOUR APPOINTMENT</span>
          <h1>Do not wait; make an appointment today!</h1>
        </div>
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
