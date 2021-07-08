import ContactForm from "../components/ContactForm";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../lib/constants";
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
                <a href={FACEBOOK_LINK}>Facebook</a>
                <a href={INSTAGRAM_LINK}>Instagram</a>
            </p>
        </div>
      </div>
    </div>
  );
}
