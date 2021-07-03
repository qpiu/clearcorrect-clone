import React from "react";
import Carousel from "../components/Carousel";
import IndexBelt from "../sections/IndexBelt";
import CountUp from "../components/Countup";

const whoweare = () => {
  return (
    <div>
      <IndexBelt></IndexBelt>
      <Carousel></Carousel>

      <section class="ftco-section ftco-no-pt ftco-no-pb" id="section2">
        <div class="container-xl">
          <div class="row g-xl-5">
            <div class="col-md-12 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div class="mt-0 my-lg-4 py-4">
                <span class="subheading">Learn Anything</span>
                <h2 class="mb-2">We Offer Best Dental Services</h2>
                <div class="row mt-4 g-lg-2">
                  <div class="col-lg-4 d-flex align-items-stretch services-wrap">
                    <div class="services d-flex">
                      <div class="icon">
                        <span class="flaticon-online-booking"></span>
                      </div>
                      <div class="text">
                        <h2>Easy Booking</h2>
                        <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 d-flex align-items-stretch services-wrap">
                    <div class="services d-flex">
                      <div class="icon">
                        <span class="flaticon-dentist"></span>
                      </div>
                      <div class="text">
                        <h2>Team Dentist</h2>
                        <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 d-flex align-items-stretch services-wrap">
                    <div class="services d-flex">
                      <div class="icon">
                        <span class="flaticon-offer"></span>
                      </div>
                      <div class="text">
                        <h2>Best Price Guarantee</h2>
                        <p class="mb-0">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container-xl">
          <div class="row g-xl-5">
            <div class="col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div class="img w-100" style={{ backgroundImage: `url('./assets/about.jpeg')` }}></div>
            </div>
            <div class="col-md-6 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div class="mt-0 my-lg-5 py-5">
                <p>
                  {" "}
                  <span class="subheading">Welcome to our Dental Clinic</span>
                </p>
                <h2 class="mb-2">ClearCorrect is a Dental Clinic and Innovative Approach to Treatment</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div class="row section-counter mt-5 viewed">
                  <div class="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div class="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div class="icon">
                        <span class="flaticon-affection"></span>
                      </div>
                      <div class="text">
                        <h2 class="number">
                          <CountUp number={3000}></CountUp>
                        </h2>
                        <span class="caption">Happy Patients</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div class="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div class="icon">
                        <span class="flaticon-gum"></span>
                      </div>
                      <div class="text">
                        <h2 class="number">
                          <CountUp number={2200}></CountUp>
                        </h2>
                        <span class="caption">Performed Treatments</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div class="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                      <div class="icon">
                        <span class="flaticon-calendar"></span>
                      </div>
                      <div class="text">
                        <h2 class="number">
                          <CountUp number={24}></CountUp>
                        </h2>
                        <span class="caption">Year of Experienced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="map_section1">
        <div class="container1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.519192080184!2d-70.97080018504853!3d42.096350159707654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e49b6e4db7ff99%3A0xf4a86f887a74bcd6!2s777%20Brockton%20Ave%2C%20Abington%2C%20MA%2002351%2C%20USA!5e0!3m2!1sen!2sin!4v1616587362158!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0", allowFullScreen: " ", loading: "lazy" }}></iframe>{" "}
        </div>
      </div>

      <CountUp></CountUp>
    </div>
  );
};

export default whoweare;
