import React, { useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
  }, 4000);

//   React.useEffect(() => {
//     useInterval(() => {
      //   if (!pause && slider) {
      //     let newCurrentSlide = (currentSlide + 1) % 2;
      //     setCurrentSlide(newCurrentSlide);
      //     console.log(currentSlide);
      //     slider.next();
      //   }
//       setCurrentSlide((currentSlide) => currentSlide + 1);
//       console.log(currentSlide);
//     }, 4000);
//     return () => {
//       clearInterval(myTimer);
//     };
//   }, []);

  return (
    <>
      <div ref={sliderRef} className="keen-slider slider-wrap">
        <div className="keen-slider__slide number-slide1 img slider journey_1">
          <div className="flex container height-100 align-item-center">
            <div className="slider-txt">
              <h1>Dentist Services that You Can Trust</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide2 img slider journey_2">
          <div className="container">
            <div className="slider-txt">
              <h1>A Brighter Dental Experienced</h1>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>
        </div>

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
