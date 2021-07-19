import React from "react";
import styles from "./Hero.module.css";
import Breadcrumbs from "nextjs-breadcrumbs";
import HeroBelt from "../sections/HeroBelt";

const Hero = (props) => {
  return (
    <div className="section">
      <div className={`${styles.heroWrap} ${props.page}`}>
        <div className="overlay"></div>
        <div className="">
          <div className={styles.txtFlex}>
            <div className={styles.txtWrap}>
              <Breadcrumbs useDefaultStyle labelsToUppercase transformLabel={(title) => (title === "Home" || title === "post" ? title + " >" : props.title + " >")}></Breadcrumbs>
              <h1>{props.title}</h1>
            </div>
            <HeroBelt></HeroBelt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
