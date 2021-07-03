import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const MyComponent = () => {
  const [visible, setVisible] = useState(0);
  return (
    <>
      <CountUp end={2000} redraw={false}>
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={() => {
              if (!visible) {
                start
              }
            }}
            delayedCall
          >
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>
    </>
  );
};
export default MyComponent;
