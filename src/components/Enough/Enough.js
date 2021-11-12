import React, { useEffect } from "react";
import "./Enough.css";
import AOS from "aos";
import "aos/dist/aos.css";
import enoughSent from "../../assets/enoughTape.svg";
import nowHand from "../../assets/nowHand.png";
// import HorizontalScroll from "react-scroll-horizontal";
// import { Element } from "react-scroll";
import { useHorizontalScroll } from "../useHorizontalScroll";

function Enough() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 2000 });
  }, []);
  const scrollRef = useHorizontalScroll();
  return (
    <div className="enoughCont">
      <div ref={scrollRef} className="imgCont">
        <div data-aos="fade-down">
          <img className="enoughHand" src={nowHand} alt="nowHand"></img>
        </div>
        <img className="enoughImg" src={enoughSent} alt="enoughSent"></img>
      </div>

      <div className="imgContMobile">
        <img
          className="enoughImgMobile"
          src={enoughSent}
          alt="enoughSent"
        ></img>
        <img
          className="enoughImgMobile"
          src={enoughSent}
          alt="enoughSent"
        ></img>
      </div>
    </div>
  );
}

export default Enough;
