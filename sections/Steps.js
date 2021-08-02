import React from "react";
import styles from "./Steps.module.css";
import Step from "../components/Step";
import Fade from "react-reveal/Fade";

const list = [
  { title: "讓您的牙齒有個全新的機會", txt: "別再猶豫! 立刻諮詢牙醫師並且開始您的 ClearCorrect透明矯正療程  ", list: [], src: "journey_1" },
  { title: "出發日", txt: "在預約當日，專業的矯正醫療團隊會與您一同討論矯正的細節，並且一同處理所有需要的資料：", list: ["大頭照", "口腔照片", "口腔掃描"], src: "journey_2" },
  { title: "矯正之旅準備出發", txt: "", list: ["一旦您的矯正醫療團隊提供我們您的資料，我們會立即與您的牙醫師依據您的需求及口腔狀況，開始規劃討論專屬於您的矯正治療計劃。", "當我們完成治療計劃後，會將資料提供給您的矯正醫療團隊，他們將會向您解說專屬矯正療程", "當您與您的治療團隊對矯正療程達成共識，我們將會開始設計您的牙套"], src: "journey_3" },
];

const belt = ["每天需配戴隱形牙套22小時以達到最好的矯正成果", "需要幾天去習慣戴著牙套的感覺，一旦您習慣，幾乎不會注意到它的存在", "即使牙套是抗污材質，但還是建議食用及飲用熱、燙食物時取下牙套，記得隨身帶著收納盒來收納您的牙套吧！"];

const Steps = () => {
  return (
    <div className={styles.stepsWrap}>
      <div className="container">
        <h2>展露自信健康的笑容的方法，僅需幾步驟即可展開這趟旅程</h2>
        {list.map((el, i) => {
          return <Step dir={i % 2 === 0 ? "normal" : "reverse"} key={i} el={el}></Step>;
        })}
        <Fade bottom>
          <div className={styles.stepsEnd}>
            <div className={styles.stepsEndTxt}>
              <p>當牙套製作完成後，您的治療團隊將會收到專屬於您的牙套，並且與您預約討論後續矯正流程。馬上啟程迎接您的完美微笑吧！</p>
            </div>
            <div className={styles.stepsEndImg}></div>
          </div>
        </Fade>
      </div>

      <div className="ftca-section wcc-section">
        <div className="container">
          <h2>Some tips for a fun Journey</h2>
          <Fade bottom>
            <ul className={styles.stepBeltList}>
              {belt.map((el, i) => {
                return (
                  <li key={i}>
                    <div className={styles.imgBlock}>
                      <img src={`../assets/step_belt_${i}.png`} />
                    </div>
                    <div className={styles.txtBlock}>
                      <p>{el}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Steps;
