import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const MyComponent = (props) => {
  const [triggered, setTriggered] = useState(0);
  const number = props.number
  return (
    <>
      <CountUp
        start={triggered ? number : 0}
        end={number}
        redraw={false}
        onEnd={() => setTriggered(1)}
      >
        {({ countUpRef, start }) => (
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible && !triggered) {
                start();
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
