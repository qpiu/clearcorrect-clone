import React from "react";
import Image from "next";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.topWrap}>
      <div className={styles.top}>
        <div>
          <div>
            <img src="/assets/logo.png" alt="me" width="300" />
          </div>
        </div>

        <div className={styles.ctaButton}>
          <a href="#">Find a provider</a>
        </div>
      </div>
    </div>
  );
};

export default Top;
