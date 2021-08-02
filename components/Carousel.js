import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const list = [
  { title: "享樂人生 因齒完美", img: "carousel_1" },
  { title: "享樂人生 因齒完美",  img: "carousel_2" },
];

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Carousel(props) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [pause, setPause] = React.useState(false);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useInterval(() => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % 2);
    slider.next();
  }, 5000);

  return (
    <>
      <div ref={sliderRef} className="keen-slider slider-wrap">
        {list.map((el, i) => {
          return (
            <div key={i} className={`keen-slider__slide number-slide1 img slider ${el.img}`}>
              <div className="flex container height-100 align-item-center">
                <div className="slider-txt">
                  <h1>{el.title}</h1>
                  <p>{el.content}</p>
                </div>
              </div>
            </div>
          );
        })}

        {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                    setCurrentSlide(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Carousel;
