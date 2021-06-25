import "../styles/global.css";
import React, { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Navs from "../sections/Navs";
import Top from "../sections/Top";
import SideButton from "../sections/SideButton";
import Footer from "../sections/Footer";

function MyApp ( { Component, pageProps } ) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous" />
      </Head>
      <content>
        <Top></Top>
        <Navs />
        <Component { ...pageProps } />

        <Footer></Footer>

        <SideButton></SideButton>
      </content>
    </>
  );
}

export default MyApp;
