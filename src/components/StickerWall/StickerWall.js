import React from "react";
import "./StickerWall.css";
import stiwall1 from "../../assets/stiwall1.svg";
import stiwall2 from "../../assets/stiwall2.svg";
import stiwall3 from "../../assets/stiwall3.svg";
import stiwall4 from "../../assets/stiwall4.svg";
import stiwall5 from "../../assets/stiwall5.svg";
import stiwall6 from "../../assets/stiwall6.svg";
import stiwall7 from "../../assets/stiwall7.svg";
import stiwall8 from "../../assets/stiwall8.svg";
import stiwall9 from "../../assets/stiwall9.svg";
import stiwall10 from "../../assets/stiwall10.svg";
import stiwall11 from "../../assets/stiwall11.svg";
import stiwallstars from "../../assets/stiwallstars.svg";

function StickerWall() {
  return (
    <div className="stiWallDiv">
      <div className="row1">
        <img src={stiwall1} className="sticker1 stiPosFu"></img>
        <img src={stiwall2} className="sticker2 stiCode"></img>
        <img src={stiwall3} className="sticker1 stiSuperb"></img>
        <img src={stiwallstars} className="sticker1 stiStar"></img>
      </div>
      <div className="row2">
        <img src={stiwall4} className="sticker2 stiCog"></img>
        <img src={stiwallstars} className="sticker1 stiStar"></img>
        <img src={stiwall5} className="sticker2 stiCalender"></img>
        <img src={stiwall6} className="sticker2 stiStandard"></img>
        <img src={stiwall7} className="sticker2 stiSmiley"></img>
      </div>
      <div className="row3">
        <img src={stiwall8} className="sticker1 stiNow"></img>
        <img src={stiwall9} className="sticker1 stiBlue"></img>
        <img src={stiwall10} className="sticker2 stiTicket"></img>
        <img src={stiwallstars} className="sticker1 stiStar"></img>
        <img src={stiwall11} className="sticker2 stiHand"></img>
      </div>
    </div>
  );
}

export default StickerWall;
