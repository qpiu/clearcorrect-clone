import Head from "next/head";
import WcaList from "../sections/WcaList";
import Testimonies from "../sections/Testimonies";
import Wccs from "../sections/Wccs";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";

import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ClearCorrect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero title="Who We Are" page="whoweare"></Hero>

        <HeroBelt></HeroBelt>

        <Fade bottom>
          <div className="container">
            <div className="flex">
              <div className="hero-one-img"></div>
              <div className="hero-one-txt">
                <h1>Hey! We’re ClearCorrect</h1>
                <h3>Nice to meet you.</h3>
                <p>ClearCorrect™ was founded back in 2006 by a dentist – Dr. Willis Pumphrey, who had over 400 patients that needed to finish their clear aligner treatment, but no one to make the aligners for them.</p>
                <p>So, Dr. Willis Pumphrey went the extra mile for his patients! He founded ClearCorrect™ to make aligners for his patients. He treated his 400 patients successfully with Clear Aligners with great results!</p>
                <p>One by one, other dentists signed up to try Dr. Willis Pumphrey’s solution, and ClearCorrect was founded and started to grow.</p>
                <p>Today, we have served tens of thousands of dentists all over the world and have delivered literally millions of aligners to our customers. Through it all, we’ve made it our priority to listen to our customers, and to put your needs first. That’s what’s kept us going for 15 years, and that’s how we know we’ll always be here.</p>
                <p>We are ClearCorrect – Clear. Simple. Friendly.</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <section className="ftca-section">
            <div className="container flex">
              <div className="wca-img-block"></div>
              <div className="wca-head">
                <h2>why choose clear aligners?</h2>
                <p>If you’re not completely happy with your smile, but aren’t a big fan of metal braces, clear aligners might be just the thing for you as they are:</p>
                <WcaList></WcaList>
              </div>
            </div>
          </section>
        </Fade>

        <Fade bottom>
          <section className="ftca-section">
            <div className="container flex m360">
              <div className="dca-head">
                <h2>How do clear aligners work?</h2>
                <p>Based on your doctor’s prescription, we start working on your customised treatment plan using advance technology in order to create your unique, custom clear aligners that apply targeted pressure to your teeth to slowly move them into alignment.</p>
              </div>
              <div className="dca-img-block">
                <img src="./assets/teeth_flow.png" />
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom>
          <section className="ftca-section"></section>
          <div className="container flex">
            <Testimonies></Testimonies>
          </div>
        </Fade>

        <section className="ftca-section wcc">
          <div className="container flex">
            <Wccs></Wccs>
          </div>
        </section>
      </main>
    </div>
  );
}
