import "../styles/global.css";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Navs from "../sections/Navs";
import Top from "../sections/Top";
import SideButton from "../sections/SideButton";
import Footer from "../sections/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="stylesheet" type="text/css" href="./flaticon.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous" />
      </Head>
      <content>
        <Top></Top>
        <Navs />
        <Component {...pageProps} />

        <Footer></Footer>

        <SideButton></SideButton>
      </content>
    </>
  );
}

export default MyApp;
