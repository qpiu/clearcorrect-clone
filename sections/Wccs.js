import React from "react";
import Wcc from "../components/Wcc";
import styles from '../sections/Wccs.module.css'

const list = [
  { src: "wcc_1.png", head: "Founded by doctors", txt: "ClearCorrect has been listening to dental professionals and collaborating with them to create patient friendly solutions that they love and trust since 2006." },
  { src: "wcc_2.png", head: "Quality: born in the USA", txt: "Engineered in the USA with care and pride at our Center of Excellence in Texas, ClearCorrect aligners are made from material optimized for stress retention and clarity while resisting stains and cracks." },
  { src: "wcc_3.png", head: "Easy to get started", txt: "All your doctor needs from you are an intra oral scan and your pictures." },
];

export default function Wccs() {
  return (
    <div>
      <h2 className="center">Why choose Clear Correct</h2>
      <div className={styles.wccWrap}>
        {list.map((el, i) => {
          return <Wcc el={el} key={i}></Wcc>;
        })}
      </div>
    </div>
  );
}
