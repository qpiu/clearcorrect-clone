import React from "react";

const StepAction = () => {
  return (
    <div className="step-actions">
      <button type="submit" name="submit" onclick="AddContact1();" class="waves-effect waves-dark btn next-step">
        CONTINUE
      </button>
      <button class="waves-effect waves-dark btn-flat previous-step">BACK</button>
    </div>
  );
};

export default StepAction;
