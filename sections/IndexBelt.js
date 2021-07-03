import React from "react";

const IndexBelt = () => {
  return (
    <div>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row g-xl-12 d-flex align-items-center">
            <div className="col-md-12 heading-section align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="mt-0   py-4 ">
                <div className="row section-counter  viewed">
                  <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="icon">
                        <span className="flaticon-affection"></span>
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <span className="countup">3000</span>
                        </h2>
                        <span className="caption">Happy Patients</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                    <div className="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div className="icon">
                        <span className="flaticon-dental-care"></span>
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <span className="countup">2200</span>
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
                          <span className="countup">24</span>
                        </h2>
                        <span className="caption">Year of Experienced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexBelt;
