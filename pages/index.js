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
    <div>
      <IndexBelt></IndexBelt>
      <Carousel></Carousel>
      <LatestNews></LatestNews>
      <Head>
        <title>ClearCorrect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
                <div className="img w-100" style={{ backgroundImage: `url('./assets/about.jpeg')` }}></div>
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

        <div className="map_section1">
          <div className="container1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.519192080184!2d-70.97080018504853!3d42.096350159707654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49b6e4db7ff99%3A0xf4a86f887a74bcd6!2s777%20Brockton%20Ave%2C%20Abington%2C%20MA%2002351%2C%20USA!5e0!3m2!1sen!2sin!4v1616587362158!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", allowFullScreen: " ", loading: "lazy" }}></iframe>{" "}
          </div>
        </div>
      </main>
    </div>
  );
};

export default whoweare;
