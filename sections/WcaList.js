import React from "react";
import WcaItem from "../components/WcaItem";

const list = [
  { src: "comfortable-icon.png", txt: "配戴舒適" },
  { src: "removable-icon.png", txt: "簡單摘戴" },
  { src: "invisible-icon.png", txt: "透明美觀" },
];

export default function WcaList () {
  return (
    <div className="flex">
      { list.map( ( el, i ) => {
        return <WcaItem el={ el } key={ i }></WcaItem>;
      } ) }
    </div>
  );
}
