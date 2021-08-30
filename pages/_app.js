import "../styles/global.css";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Navs from "../sections/Navs";
import Top from "../sections/Top";
import SideButton from "../sections/SideButton";
import Footer from "../sections/Footer";
import { useRouter } from 'next/router'
import "../styles/breadcrumb.css";

function MyApp({ Component, pageProps }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter()
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J1KE9DK8LF"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J1KE9DK8LF', { page_path: window.location.pathname });
            `,
          }}
        />
        <title>ClearCorrect台灣透明牙套的專家-透明，簡單，友善</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="ClearCorrect台灣透明牙套的專家，具有15年歷史，已爲世界各地數以萬計的牙醫師提供服務，並提供了超過數百萬副的矯正器，享樂人生，因齒完美。我們是ClearCorrect-透明，簡單，友善" />
        <meta name="keywords" content="ClearCorrect,台灣,矯正,牙齒,透明,牙套,隱形,透明牙套,隱形牙套,矯正器,舒立齊,牙醫,牙科,牙齒矯正,專家,享樂,享樂人生,因齒完美,蛀牙,拔牙,牙周病,美白,笑容,開心,自信,整齊,潔白,魅力,治療,調整,咬合不正,戽斗,根管治療,職涯,植材,植體" />
        <meta property="og:image" content="https://www.clearcorrect.tw/_next/static/media/who_we_are_bg.c02b9c3b0f193a07ad7c17f9d3107376.jpeg"/>
        <meta name="google-site-verification" content="ml0tif-9eGNzAWh-GD0Ap85BBWwjfVA2E9rQyoc7v6o" />
      </Head>
      <content>
        <Top></Top>
        <Navs currentRoute={router.asPath} />
        <Component {...pageProps} />
        <Footer></Footer>
        <SideButton pos={scrollPosition}></SideButton>
      </content>
    </>
  );
}

export default MyApp;
