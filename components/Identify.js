import React from "react";
import styles from "./Identify.module.css";

const Identify = (props) => {
  return (
    <div className={styles.questionWrap}>
      <h3>I am ...</h3>
      <div className="step-content">
        <div className="gender-radio-item-row">
          <div className="gender-radio">
            <span>醫生</span>
            <input id="gender-radio-male" value="male" name="gender-radio" type="radio" />
            <label onClick={() => props.clicked(0)} htmlFor="gender-radio-male" className="gender-radio-label male-image"></label>
          </div>
          <div className="gender-radio">
            <span>患者</span>
            <input id="gender-radio-female" value="female" name="gender-radio" type="radio" />
            <label onClick={() => props.clicked(1)} htmlFor="gender-radio-female" className="gender-radio-label female-image"></label>
          </div>
        </div>
        {/* <div className="step-actions">
          <button onClick={props.clicked} className="waves-effect waves-dark btn next-step">
            CONTINUE
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Identify;
