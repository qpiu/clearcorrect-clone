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
        <Hero title="關於我們" page="whoweare"></Hero>
        {/* <HeroBelt></HeroBelt> */}
        <Fade bottom>
          <div className="container">
            <div className="flex mobile-block">
              <div className="hero-one-img"></div>
              <div className="hero-one-txt">
                <h1>嘿！我們是ClearCorrect</h1>
                <h3>很高興認識你</h3>
                <p>ClearCorrect™ 由牙醫 Willis Pumphrey 博士於 2006 年創立，當時他經手超過 400 多名的患者，飽受齒列不整所苦惱，希望能藉由透明牙套進行治療，但卻找不到人為他們製作矯正器。</p>
                <p>因此，Willis Pumphrey 博士為這些病人投入了大量的時間研究與努力，進而創立了 ClearCorrect™ 來為他的患者進行矯正，並成功治療了 400 名患者，且成效相當卓越！</p>
                <p>優異的產品逐漸地引起美國各地牙醫紛紛開始嘗試 Willis Pumphrey 博士的透明牙套矯正解決方案，ClearCorrect 也隨之成立並開始發展。</p>
                <p>時至今日，我們已為世界各地數以萬計的牙醫師提供服務，並提供了超過數百萬副的矯正器。我們持續傾聽客戶的意見，並將您的需求放在首位。這就是讓我們堅持超過 15 年的原因。</p>
                <p>我們是ClearCorrect – 透明，簡單，友善</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <section className="ftca-section">
            <div className="container flex mobile-block">
              <div className="wca-img-block"></div>
              <div className="wca-head">
                <h2>為什麼要選擇透明牙套？</h2>
                <p>若你不希望惱人的牙齒矯正器干擾著你的生活，更希望每次的笑容都可以更臻完美，那麼，透明牙套是你最好的選擇：</p>
                <WcaList></WcaList>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom>
          <section className="ftca-section">
            <div className="container flex">
              <div className="dca-head">
                <h2>透明牙套是如何讓您擁有完美笑容？</h2>
                <p>根據牙醫師的專業診斷開始您的矯正旅程。
以先進技術製作專屬於你的透明牙套，透過配戴牙套讓牙齒循序漸進地移動到理想位置，讓自信笑容在您的臉上綻放。</p>
              </div>
              <div className="dca-img-block">
                <img src="../assets/teeth_flow.jpg" />
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
