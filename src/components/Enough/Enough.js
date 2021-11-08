import React, { useEffect } from "react";
import "./Enough.css";
import AOS from "aos";
import "aos/dist/aos.css";
import enoughSent from "../../assets/enoughSent.svg";
import nowHand from "../../assets/nowHand.png";
import HorizontalScroll from "react-scroll-horizontal";
// import { Element } from "react-scroll";
import { useHorizontalScroll } from "../useHorizontalScroll";

function Enough() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 3000 });
  }, []);
  const scrollRef = useHorizontalScroll();
  return (
    <div className="enoughCont">
      <div ref={scrollRef} className="imgCont">
        <div data-aos="fade-down">
          <img className="enoughHand" src={nowHand}></img>
        </div>
        <img className="enoughImg" src={enoughSent}></img>
      </div>
    </div>
  );
}

export default Enough;
