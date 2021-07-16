import React from "react";
import Carousel from "../components/Carousel";
import IndexBelt from "../sections/IndexBelt";
import CountUp from "../components/Countup";
import Fade from "react-reveal/Fade";
import IndexCard from "../sections/IndexCard";
import Head from "next/head";
import LatestNews from "../sections/LatestNews";

const cards = [
  { icon: "online-booking", title: "Easy Booking", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
  { icon: "dentist", title: "Team Dentist", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
  { icon: "offer", title: "Best Price Guarantee", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
];

const whoweare = () => {
  return (
    <>
      <Head>
        <title>ClearCorrect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexBelt></IndexBelt>
      <Carousel></Carousel>
      <LatestNews index></LatestNews>

      <main className="clear">
        <section className="ftco-section ftco-no-pt ftco-no-pb" id="section2">
          <div className="container-xl">
            <div className="row g-xl-5">
              <div className="col-md-12 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="mt-0 my-lg-4 py-4">
                  <span className="subheading">Learn Anything</span>
                  <h2 className="mb-2">We Offer Best Dental Services</h2>

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
                <div className="img w-100" style={{ backgroundImage: `url('../assets/about.jpg')` }}></div>
              </div>

              <div className="col-md-6 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="mt-0 my-lg-5 py-5">
                  <p>
                    {" "}
                    <span className="subheading">Welcome to our Dental Clinic</span>
                  </p>
                  <h2 className="mb-2">ClearCorrect is a Dental Clinic and Innovative Approach to Treatment</h2>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                  <Fade bottom>
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
                            <span className="caption">Happy Patients</span>
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
                            <span className="caption">Performed Treatments</span>
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
                              <CountUp number={24}></CountUp>
                            </h2>
                            <span className="caption">Year of Experienced</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
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
