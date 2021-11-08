import React from "react";
import "./Enough.css";
import enoughSent from "../../assets/enoughSent.svg";
import HorizontalScroll from "react-scroll-horizontal";
// import { Element } from "react-scroll";
import { useHorizontalScroll } from "../useHorizontalScroll";

function Enough() {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="enoughCont">
      <div ref={scrollRef} className="imgCont">
        <img className="enoughImg" src={enoughSent}></img>
      </div>
    </div>
  );
}

export default Enough;
