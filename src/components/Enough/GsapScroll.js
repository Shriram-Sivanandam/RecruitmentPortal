import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import enoughSent from "../../assets/enoughTape.svg";
import "./Enough.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nowHand from "../../assets/nowHand.png";

function EnoughContScroll({ children }) {
  return (
    <div className="gsapContMain">
      <img className="nowHandScroll" src={nowHand} alt="enoughSent"></img>
      <img className="enoughImgScroll" src={enoughSent} alt="enoughSent"></img>
    </div>
  );
}

function GsapScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();
  const q = gsap.utils.selector(el);

  // store the timeline in a ref.
  const tl = useRef();

  useEffect(() => {
    // add a box and circle animation to our timeline and play on first render
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".gsapContMain",
          start: "top",
          end: "250%",
          scrub: true,
          pin: true,
        },
      })
      .from(q(".gsapContMain"), {
        rotation: 15,
        x: "-0vw",
      })
      .to(q(".gsapContMain"), {
        x: "-200vw",
        duration: 5,
      });
    // .from(q(".nowHandScroll"), {
    //   y: "-450%",
    // })
    // .to(q(".nowHandScroll"), {
    //   y: "-150%",
    //   duration: 4,
    // });

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".enoughImgScroll",
          start: "80%",
          end: "100%",
          scrub: true,
          pin: false,
          onUpdate: (self) => {
            tl.current.progress(self.progress);
          },
        },
      })
      .from(q(".nowHandScroll"), {
        y: "-220%",
      })
      .to(q(".nowHandScroll"), {
        y: "-120%",
      });
  }, [q]);

  return (
    <div ref={el}>
      <EnoughContScroll />
    </div>
  );
}

export default GsapScroll;
