import Head from "next/head";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";
import Steps from "../sections/Steps";

export default function journey() {
  return (
    <div>
      <main>
        <Hero title="樂齒之旅" page="journey"></Hero>
        {/* <HeroBelt></HeroBelt> */}
          <Steps></Steps>
      </main>
    </div>
  );
}
