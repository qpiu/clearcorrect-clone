import React, { useState } from "react";
import styles from "./Identify.module.css";
import StepAction from "../components/StepAction";

const Identify = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.questionWrap}>
      <h3>I am ...</h3>
      <div class="step-content">
        <div class="gender-radio-item-row">
          <div class="gender-radio">
            <input id="gender-radio-male" value="male" name="gender-radio" type="radio" checked={index === 0} />
            <label onClick={() => setIndex(0)} for="gender-radio-male" class="gender-radio-label male-image"></label>
          </div>
          <div class="gender-radio">
            <input id="gender-radio-female" value="female" name="gender-radio" type="radio" checked={index === 1} />
            <label onClick={() => setIndex(1)} for="gender-radio-female" class="gender-radio-label female-image"></label>
          </div>
        </div>
        <div class="step-actions">
          <button onClick={props.clicked} class="waves-effect waves-dark btn next-step">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identify;
