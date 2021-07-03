import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
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

  //   React.useEffect(() => {
  //     sliderRef.current.addEventListener("mouseover", () => {
  //       setPause(true);
  //     });
  //     sliderRef.current.addEventListener("mouseout", () => {
  //       setPause(false);
  //     });
  //   }, [sliderRef]);

  //   React.useEffect(() => {
  //     timer.current = setInterval(() => {
  //       if (!pause && slider) {
  //         if (currentSlide < slider.details().size - 1) {
  //           let newCurrentSlide = currentSlide;
  //           newCurrentSlide += 1;
  //           setCurrentSlide(newCurrentSlide);
  //           console.log(currentSlide)
  //         } else {
  //           setCurrentSlide(0);
  //         }
  //         slider.next();
  //       }
  //     }, 4000);
  //     return () => {
  //       clearInterval(timer.current);
  //     };
  //   }, [pause, slider]);

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
};

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={"arrow arrow--left" + disabeld} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={"arrow arrow--right" + disabeld} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}

export default Carousel;
