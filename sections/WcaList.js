import React from "react";
import WcaItem from "../components/WcaItem";

const list = [
  { src: "comfortable-icon.png", txt: "COMFORTABLE" },
  { src: "removable-icon.png", txt: "REMOVABLE" },
  { src: "invisible-icon.png", txt: "NEARLY INVISIBLE" },
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
