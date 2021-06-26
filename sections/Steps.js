import React from "react";
import styles from "./Steps.module.css";
import Step from "../components/Step";
const list = [
  { title: "Book you Journey Tickets!", txt: "Find a ClearCorrect Provider near you and book an appointment today.", list: [], src: "journey_1" },
  { title: "Journey Day", txt: "On appointment day, your provider will discuss your case in detail with you and take all records needed to submit your case:", list: ["Profile photos", "Intra-oral photos", "Intra-oral scans"], src: "journey_2" },
  { title: "Prepare for Take-off", txt: "", list: ["Once your provider submits a case to us, we will get busy with planning your case and discussing the perfect plan with your doctor which takes into account all your requirements and oral health. Once we are done with creating your plan, we send it to your provider.", "Once we send the plan to your provider, they then take you through your unique treatment plan and ask for you to sign-off on it.", "Once you and your provider are happy with the treatment plan, your case moves into the production process."], src: "journey_3" },
];

const belt = ["Wear your aligners for 22 hours a day every day for best results.", "It will take a few days to get used to wearing the aligners. Once you’re used to it, you will not notice it anymore.", "Our aligners are stain resistant, but even so, doctor’s recommend to remove your aligners while eating and drinking anything exceedingly hot. So take your retainer box along with you to store your aligners 😊"];

const Steps = () => {
  return (
    <div className={styles.stepsWrap}>
      <div className="container">
        <h2>The way to your lovely healthy smile is like a journey that starts with a few steps</h2>
        {list.map((el, i) => {
          return <Step dir={i % 2 === 0 ? "normal" : "reverse"} key={i} el={el}></Step>;
        })}
        <div className={styles.stepsEnd}>
          <div className={styles.stepsEndTxt}>
            <p>Your aligners will then be delivered to your provider who will set up an appointment with you and together, we will take off into the journey to your perfect smile!</p>
          </div>
          <div className={styles.stepsEndImg}></div>
        </div>
      </div>

      <div className="ftca-section wcc-section">
        <div className="container">
          <h2>Some tips for a fun Journey</h2>
          <ul className={styles.stepBeltList}>
            {belt.map((el, i) => {
              return (
                <li key={i}>
                  <div className={styles.imgBlock}>
                    <img src={`./assets/step_belt_${i}.png`} />
                  </div>
                  <div  className={styles.txtBlock}>
                      <p>{el}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;
