import ContactForm from "../components/ContactForm";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../lib/constants";
import Hero from "../sections/Hero";

export default function Contact() {
  return (
    <div>
      <Hero title="聯絡我們" page="journey"></Hero>
      <div className="contact-us-wrap">
        <h3>聯絡我們</h3>
        <p>如果有任何建議或想與我們聊聊，請不吝與我們聯繫！</p>
        <ContactForm />
        <div className="social-media mt-5">
            <h3>追蹤我們</h3>
            <p>
                <a href={FACEBOOK_LINK}>Facebook</a>
                <a href={INSTAGRAM_LINK}>Instagram</a>
            </p>
        </div>
      </div>
    </div>
  );
}
