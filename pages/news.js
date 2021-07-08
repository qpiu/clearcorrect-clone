import React from "react";
import LatestNews from "../sections/LatestNews";
import IndexCard from "../sections/IndexCard";
const cards = [
  { icon: "online-booking", title: "Easy Booking", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
  { icon: "dentist", title: "Team Dentist", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
  { icon: "offer", title: "Best Price Guarantee", content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." },
];
const news = () => {
  return (
    <div className="news-wrapper">
      <LatestNews></LatestNews>
    </div>
  );
};

export default news;
