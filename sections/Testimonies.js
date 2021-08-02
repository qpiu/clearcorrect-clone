import React from "react";
import Testimony from "../components/Testimony";
import styles from "./Testimonies.module.css";

import Fade from "react-reveal/Fade";

const testimony = [
  { name: "GERALD B.", txt: "使用起來很容易，而且整體療程體驗良好", src: "user_1.jpeg" },
  { name: "MERCEDES F.", txt: "「相較過去我更加開朗，並更愛露出牙齒微笑」ClearCorrect最讓我喜歡的點就是，在矯正過程中，沒有人知道我正在進行牙齒矯正，人們也都不吝稱讚我的笑容。", src: "user_2.jpeg" },
  { name: "CONNIE H.", txt: "「只要裝上去，然後拿下來」身為一位專業人士，所以無論是與客戶見面或其他場合，你一定會想用最好的樣貌面對他們，給他們最好的笑容…好慶幸我選擇了ClearCorrect透明牙套，讓我感覺變得比以前更出色。", src: "user_3.jpeg" },
];

const Testimonies = () => {
  return (
    <div className={styles.testimoniesWrap}>
      <Fade>
          <div className="container">

        <div className={styles.txtWrap}>
          <h2>透明牙套能為我帶來什麼？</h2>
          <p>整齊排列的牙齒不僅能使你看起來更有精神，在功能上也有所幫助。不整齊的牙齒除了咀嚼困難，牙齒的琺瑯質也容易磨損，更會加速蛀牙的風險。一旦你能自信微笑，可能會不自禁地綻放笑容</p>
        </div>
        </div>
      </Fade>
      <Fade>
        <div className={`flex ${styles.testimonies}`}>
          {testimony.map((el, i) => {
            return <Testimony key={i} el={el} />;
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Testimonies;
