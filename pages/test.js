import React from "react";
import StepAction from "../components/StepAction";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";

const test = () => {
  return (
    <div>
      <Hero title="Smile Check" page="journey"></Hero>
      <HeroBelt></HeroBelt>
      <section className="ftca-section">
        <div className="container">
          <form name="smilechk">
            <ul className="stepper">
              <li className="step step1">
                <div className="step-title">I am</div>
                <div className="step-content">
                  <div className="gender-radio-item-row">
                    <div className="gender-radio">
                      <input id="gender-radio-male" value="male" name="gender-radio" type="radio" checked="" />
                      <label for="gender-radio-male" class="gender-radio-label male-image"></label>
                    </div>
                    <div className="gender-radio">
                      <input id="gender-radio-female" value="male" name="gender-radio" type="radio" checked="" />
                      <label for="gender-radio-female" class="gender-radio-label female-image"></label>
                    </div>
                  </div>
                </div>

                <StepAction></StepAction>
              </li>
              <li className="step step2">
                <div className="step-title">Been on this planet for</div>
                <div className="step-content">
                  <div className="row d-flex justify-content-center">
                    <div className="form-field col-sm-4">
                      <div className="input-field">
                        <label for="textfield" class="active">
                          Age in years
                        </label>
                        <input type="text" className="form-control" name="age" id="age" placeholder="Enter your age" required="" />
                      </div>
                    </div>
                  </div>
                </div>
                <StepAction></StepAction>
              </li>
              <li className="step step3">
                <div className="step-title">The shape of my face closely matches</div>
                <div className="step-content">
                  <div class="gender-radio-item-row shapeRadio" id="genderShapefemale">
                    <div class="gender-radio">
                      <input id="gender-female-radio-long" name="genderlong" type="radio" value="woman-long" checked="" />
                      <label for="gender-female-radio-long" class="gender-radio-label woman-long"></label>
                    </div>
                    <div class="gender-radio">
                      <input id="gender-female-radio-wide" name="genderlong" type="radio" value="woman-wide" />
                      <label for="gender-female-radio-wide" class="gender-radio-label woman-wide"></label>
                    </div>
                    <div class="gender-radio">
                      <input id="gender-female-radio-regular" name="genderlong" type="radio" value="woman-regular" />
                      <label for="gender-female-radio-regular" class="gender-radio-label woman-regular"></label>
                    </div>
                  </div>
                </div>
                <StepAction></StepAction>
              </li>
              <li className="step step4">
                <div className="step-title">My teeth look similar to</div>
                <div className="step-content">
                  <p class="margin-bottom-0">
                    <i>Take a look inside! Bite down and stretch your lips with your fingers.</i>
                  </p>
                  <p>
                    <i>Do you see similarities to any of the images below? Multiple selections are possible!</i>
                  </p>
                  <div class="tls-info-wrap">
                    <h5>Deep bite</h5>
                    <div class="tls-check-item-row">
                      <div class="tls-check-item">
                        <input type="checkbox" name="similar" value="D" class="deep" onchange="selectimg(this)" />
                        <label class="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/deepbite/Deepbite-Spacing.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="tls-info-wrap">
                    <h5>Open bite</h5>
                    <div class="tls-check-item-row">
                      <div class="tls-check-item">
                        <input type="checkbox" name="similar" id="O" class="open" value="O" onchange="selectimg(this);" />
                        <label class="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/openbite/openbite-spaces.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="tls-info-wrap">
                    <h5>Crowding</h5>
                    <div class="tls-check-item-row">
                      <div class="tls-check-item">
                        <input type="checkbox" name="similar" id="C" value="C" onchange="selectimg(this);" />
                        <label class="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/crowding/Crowding-plus-spacing.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="tls-info-wrap">
                    <h5>Spacing</h5>
                    <div class="tls-check-item-row">
                      <div class="tls-check-item">
                        <input type="checkbox" name="similar" id="S" value="S" onchange="selectimg(this);" />
                        <label class="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/spacing/spacing-crowding.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="tls-info-wrap">
                    <h5>Crossbite</h5>
                    <div class="tls-check-item-row">
                      <div class="tls-check-item">
                        <input type="checkbox" name="similar" id="CE" value="CE" onchange="selectimg(this);" />
                        <label class="tls-check-label">
                          <img src="http://mydevfactory.com/~sanjib7php/tuhina/clearcorrect/wp-content/themes/cleancorrect/images/crossbite/CROSSBITE-CROWDING-SPACES.jpg" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="step step5">
                <div className="step-title">My oral health</div>
                <div class="step-content">
                            <p><i>Take a look at your gums</i></p>
                            <div class="radio-flex-row">
                                <div class="radio">
                                    <input id="radio-1" name="oral" type="radio" value="yes" checked=""/>
                                    <label for="radio-1" class="radio-label">Yes</label>
                                </div>
                            
                                <div class="radio">
                                    <input id="radio-2" name="oral" type="radio" value="no"/>
                                    <label for="radio-2" class="radio-label">No</label>
                                </div>
                            </div>
                            <div class="step-actions">
                                <button type="submit" onclick="AddContact5();" class="waves-effect waves-dark btn next-step" id="showmenu">SUBMIT</button>
                                <button class="waves-effect waves-dark btn-flat previous-step">BACK</button>
                            </div>
                    </div>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  );
};

export default test;
