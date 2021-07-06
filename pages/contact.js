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
