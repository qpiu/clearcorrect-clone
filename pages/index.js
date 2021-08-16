import React from "react";
import Carousel from "../components/Carousel";
import IndexBelt from "../sections/IndexBelt";
import CountUp from "../components/Countup";
import Fade from "react-reveal/Fade";
import IndexCard from "../sections/IndexCard";
import Head from "next/head";
import LatestNews from "../sections/LatestNews";

const cards = [
  { icon: "online-booking", title: "簡單預約", content: "只要幾個簡單動作\n旅程即將展開" },
  { icon: "dentist", title: "牙醫師團隊", content: "專業的牙醫師團隊 \n 為您量身訂製" },
  { icon: "offer", title: "最划算的價格", content: "以經濟實惠的價格 \n 換得未來的享樂人生" },
];

const whoweare = () => {
  return (
    <>
      <Carousel></Carousel>
      <LatestNews index></LatestNews>

      <main className="clear">
        <section className="ftco-section ftco-no-pt ftco-no-pb" id="section2">
          <div className="container-xl">
            <div className="row g-xl-5">
              <div className="col-md-12 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="mt-0 my-lg-4 py-4">
                  <span className="subheading">Learn Anything</span>
                  <h2 className="mb-2">我們提供最好的牙醫服務</h2>

                  <div className="row mt-4 g-lg-2">
                    {cards.map((el, i) => {
                      return <IndexCard key={i} el={el}></IndexCard>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-no-pt ftco-no-pb long">
          <div className="container-xl">
            <div className="row g-xl-5">
              <div className="col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <div className="img w-100 height-700" style={{ backgroundImage: `url('../assets/about.jpg')` }}></div>
              </div>

              <div className="col-md-6 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="mt-0 my-lg-5 py-5">
                  <p>
                    {" "}
                    <span className="subheading">歡迎來到我們的樂齒世界</span>
                  </p>
                  <h2 className="mb-2">ClearCorrect透過創新的矯正方式，讓您盡情享受人生</h2>

                  {/* <Fade bottom>
                    <div className="row section-counter mt-5 long">
                      <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                          <div className="icon">
                            <span className="flaticon-affection"></span>
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <CountUp number={3000}></CountUp>
                            </h2>
                            <span className="caption">愉快的病患</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                          <div className="icon">
                            <span className="flaticon-gum"></span>
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <CountUp number={2200}></CountUp>
                            </h2>
                            <span className="caption">矯正經驗</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                          <div className="icon">
                            <span className="flaticon-calendar"></span>
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <CountUp number={15}></CountUp>
                            </h2>
                            <span className="caption">年經驗</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
    </>
  );
};

export default whoweare;
