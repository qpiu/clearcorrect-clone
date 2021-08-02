import React from "react";
import Wcc from "../components/Wcc";
import styles from "../sections/Wccs.module.css";
import Fade from "react-reveal/Fade";

const list = [
  { src: "wcc_1.png", head: "Founded by doctors", txt: "自2006年起，ClearCorrect與全球上萬名牙醫師緊密合作，希望為病患創造更友善的矯正方式" },
  { src: "wcc_2.png", head: "Quality: born in the USA", txt: "在美國德州的專業中心設計，ClearCorrect牙套材質抗污、耐刮，適合穩定持續加壓且透明度高" },
  { src: "wcc_3.png", head: "Easy to get started", txt: "您只需要透過諮詢牙醫師，且進行口腔掃描並拍攝照片" },
];

export default function Wccs() {
  return (
    <div>
      <h2 className="center">為什麼選擇ClearCorrect</h2>

      <Fade bottom>
        <div className={styles.wccWrap}>
          {list.map((el, i) => {
            return <Wcc el={el} key={i}></Wcc>;
          })}
        </div>
      </Fade>
    </div>
  );
}
