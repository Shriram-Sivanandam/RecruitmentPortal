import React from "react";
import "./StickerWall.css";
import stiwall1 from "../../assets/stiwall1.svg";
import stiwall2 from "../../assets/stiwall2.svg";
import stiwall3 from "../../assets/superbstiwall.svg";
import stiwall4 from "../../assets/stiwall4.svg";
import stiwall5 from "../../assets/stiwall5.svg";
import stiwall6 from "../../assets/stanstiwall.svg";
import stiwall7 from "../../assets/stiwall7.svg";
import stiwall8 from "../../assets/stiNOW.svg";
import stiwall9 from "../../assets/stiwall9.svg";
import stiwall10 from "../../assets/Group 301.svg";
import stiwall11 from "../../assets/stiwall11.svg";
import stickwallhead from "../../assets/headingstiwall.svg";

function StickerWall() {
  return (
    <div className="stiWallDiv">
      <div className="heading_stiwall">
        <img src={stickwallhead} className="stiheading"></img>
      </div>
      <div className="contStiWall">
        <img src={stiwall4} className="sticker2 stiCog"></img>
        <img src={stiwall7} className="sticker2 stiSmiley"></img>
        <img src={stiwall5} className="sticker2 stiCalender"></img>
        <img src={stiwall3} className="sticker1 stiSuperb"></img>
        <img src={stiwall2} className="sticker2 stiCode"></img>
        <img src={stiwall1} className="sticker1 stiPosFu"></img>
        <img src={stiwall11} className="sticker2 stiHand"></img>
        <img src={stiwall9} className="sticker1 stiBlue"></img>
        <img src={stiwall10} className="sticker2 stiTicket"></img>
        <img src={stiwall6} className="sticker2 stiStandard"></img>
        <img src={stiwall8} className="sticker1 stiNow"></img>
      </div>
    </div>
  );
}

export default StickerWall;
