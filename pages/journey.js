import Head from "next/head";
import Hero from "../sections/Hero";
import HeroBelt from "../sections/HeroBelt";
import Steps from "../sections/Steps";

export default function journey() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero title="" page="journey"></Hero>
        {/* <HeroBelt></HeroBelt> */}
          <Steps></Steps>
      </main>
    </div>
  );
}
