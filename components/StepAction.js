import React from "react";

const StepAction = (props) => {
  return (
    <div className="step-actions">
      <button onClick={props.clicked} className="waves-effect waves-dark btn next-step">
        CONTINUE
      </button>
      <button className="waves-effect waves-dark btn-flat previous-step">BACK</button>
    </div>
  );
};

export default StepAction;
