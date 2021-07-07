import React from "react";

const list = [
  { number: "3000", icon: "affection", content: "Happy Patients" },
  { number: "2200", icon: "dental-care", content: "Performed Treatments" },
  { number: "24", icon: "calendar", content: "Year of Experienced" },
];

const IndexBelt = () => {
  return (
    <div>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container-xl">
          <div className="row g-xl-12 d-flex align-items-center">
            <div className="col-md-12 heading-section align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="mt-0   py-4 ">
                <div className="row section-counter">
                  {list.map((el, i) => {
                    return (
                      <div key={i} className="col-sm-6 col-md-6 col-lg-4 d-flex align-items-stretch">
                        <div className="counter-wrap-2 d-flex aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                          <div className="icon">
                            <span className={`flaticon-${el.icon}`}></span>
                          </div>
                          <div className="text">
                            <h2 className="number">
                              <span className="countup">{el.number}</span>
                            </h2>
                            <span className="caption">{el.content}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
