import React, { useState } from "react";
import styles from "./Identify.module.css";
import StepAction from "../components/StepAction";

const Identify = (props) => {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.questionWrap}>
      <h3>I am ...</h3>
      <div className="step-content">
        <div className="gender-radio-item-row">
          <div className="gender-radio">
            <input id="gender-radio-male" value="male" name="gender-radio" type="radio" checked={index === 0} />
            <label onClick={() => setIndex(0)} for="gender-radio-male" className="gender-radio-label male-image"></label>
          </div>
          <div className="gender-radio">
            <input id="gender-radio-female" value="female" name="gender-radio" type="radio" checked={index === 1} />
            <label onClick={() => setIndex(1)} for="gender-radio-female" className="gender-radio-label female-image"></label>
          </div>
        </div>
        <div className="step-actions">
          <button onClick={props.clicked} className="waves-effect waves-dark btn next-step">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Identify;
