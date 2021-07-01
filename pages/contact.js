import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import parse from "html-react-parser";
import Hero from "../sections/Hero";

export default function Contact() {
  return (
    <div>
      <Hero title="Get in Touch" page="journey"></Hero>

      <div className="contact-us-wrap">
        <h3>Contact us</h3>
        <p>We're open for any suggestion or just to have a chat</p>

        <div className="row flex mobile-block">
          <div className="col">
            <div className="contact-box">
              <p>
                <span>ADDRESS:</span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
          </div>
          <div className="col">
            <div className="contact-box">
              <p>
                <span>EMAIL:</span>
                <a href="mailto:contact@clearcorrect.com">contact@clearcorrect.com</a>
              </p>
            </div>
          </div>
          <div className="col">
            <div className="contact-box">
              <p>
                <span>PHONE:</span>
                <a href="tel:+2 392 3929 210"> +2 392 3929 210</a>
              </p>
            </div>
          </div>
        </div>
        <ContactForm />

        <div className="social-media mt-5">
            <h3>Follow Us Here</h3>
            <p>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </p>
        </div>
      </div>
    </div>
  );
}
