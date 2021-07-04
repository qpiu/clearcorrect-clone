import React, { useState } from "react";
import StepAction from "../components/StepAction";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";

const test = () => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <Hero title="Smile Check" page="journey"></Hero>
      <HeroBelt></HeroBelt>
      <section className="ftca-section">
        <div className="container">
          <div name="smilechk">
            <ul className="stepper">
              <li className={`step step1 ${active === 0 ? "active" : "done"}`}>
                <div onClick={() => setActive(0)} className="step-title">I am</div>
                <div className="step-content">
                  <div className="gender-radio-item-row">
                    <div className="gender-radio">
                      <input id="gender-radio-male" value="male" name="gender-radio" type="radio" checked="" />
                      <label for="gender-radio-male" className="gender-radio-label male-image"></label>
                    </div>
                    <div className="gender-radio">
                      <input id="gender-radio-female" value="male" name="gender-radio" type="radio" checked="" />
                      <label for="gender-radio-female" className="gender-radio-label female-image"></label>
                    </div>
                  </div>
                  <StepAction clicked={() => setActive(1)}></StepAction>
                </div>
              </li>
              <li className={`step step2 ${active === 1 ? "active" : ""} ${active > 1 ? "done" : ""}`}>
                <div onClick={() => setActive(1)} className="step-title">Been on this planet for</div>
                <div className="step-content">
                  <div className="row d-flex justify-content-center">
                    <div className="form-field col-sm-4">
                      <div className="input-field">
                        <label for="textfield" >
                          Age in years
                        </label>
                        <input type="text" className="form-control" name="age" id="age" placeholder="Enter your age" required="" />
                      </div>
                    </div>
                  </div>
                  <StepAction clicked={() => setActive(2)}></StepAction>
                </div>
              </li>
              <li className={`step step3 ${active === 2 ? "active" : ""} ${active > 2 ? "done" : ""}`}>
                <div onClick={() => setActive(2)} className="step-title">The shape of my face closely matches</div>
                <div className="step-content">
                  <div className="gender-radio-item-row shapeRadio" id="genderShapefemale">
                    <div className="gender-radio">
                      <input id="gender-female-radio-long" name="genderlong" type="radio" value="woman-long" checked="" />
                      <label for="gender-female-radio-long" className="gender-radio-label woman-long"></label>
                    </div>
                    <div className="gender-radio">
                      <input id="gender-female-radio-wide" name="genderlong" type="radio" value="woman-wide" />
                      <label for="gender-female-radio-wide" className="gender-radio-label woman-wide"></label>
                    </div>
                    <div className="gender-radio">
                      <input id="gender-female-radio-regular" name="genderlong" type="radio" value="woman-regular" />
                      <label for="gender-female-radio-regular" className="gender-radio-label woman-regular"></label>
                    </div>
                  </div>
                  <StepAction clicked={() => setActive(3)}></StepAction>
                </div>
              </li>
              <li className={`step step4 ${active === 3 ? "active" : ""} ${active > 3 ? "done" : ""}`}>
                <div onClick={() => setActive(3)} className="step-title">My teeth look similar to</div>
                <div className="step-content">
                  <p className="margin-bottom-0">
                    <i>Take a look inside! Bite down and stretch your lips with your fingers.</i>
                  </p>
                  <p>
                    <i>Do you see similarities to any of the images below? Multiple selections are possible!</i>
                  </p>
                  <div className="tls-info-wrap">
                    <h5>Deep bite</h5>
                    <div className="tls-check-item-row">
                      <div className="tls-check-item">
                        <input type="checkbox" name="similar" value="D" className="deep" onchange="selectimg(this)" />
                        <label className="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/deepbite/Deepbite-Spacing.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="tls-info-wrap">
                    <h5>Open bite</h5>
                    <div className="tls-check-item-row">
                      <div className="tls-check-item">
                        <input type="checkbox" name="similar" id="O" className="open" value="O" onchange="selectimg(this);" />
                        <label className="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/openbite/openbite-spaces.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="tls-info-wrap">
                    <h5>Crowding</h5>
                    <div className="tls-check-item-row">
                      <div className="tls-check-item">
                        <input type="checkbox" name="similar" id="C" value="C" onchange="selectimg(this);" />
                        <label className="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/crowding/Crowding-plus-spacing.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="tls-info-wrap">
                    <h5>Spacing</h5>
                    <div className="tls-check-item-row">
                      <div className="tls-check-item">
                        <input type="checkbox" name="similar" id="S" value="S" onchange="selectimg(this);" />
                        <label className="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/spacing/spacing-crowding.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="tls-info-wrap">
                    <h5>Crossbite</h5>
                    <div className="tls-check-item-row">
                      <div className="tls-check-item">
                        <input type="checkbox" name="similar" id="CE" value="CE" onchange="selectimg(this);" />
                        <label className="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/crossbite/CROSSBITE-CROWDING-SPACES.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <StepAction clicked={() => setActive(3)}></StepAction>
                </div>
              </li>
              <li className="step step5">
                <div className="step-title">My oral health</div>
                <div className="step-content">
                  <p>
                    <i>Take a look at your gums</i>
                  </p>
                  <div className="radio-flex-row">
                    <div className="radio">
                      <input id="radio-1" name="oral" type="radio" value="yes" checked="" />
                      <label for="radio-1" className="radio-label">
                        Yes
                      </label>
                    </div>

                    <div className="radio">
                      <input id="radio-2" name="oral" type="radio" value="no" />
                      <label for="radio-2" className="radio-label">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="step-actions">
                    <button type="submit" onclick="AddContact5();" className="waves-effect waves-dark btn next-step" id="showmenu">
                      SUBMIT
                    </button>
                    <button className="waves-effect waves-dark btn-flat previous-step">BACK</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default test;
