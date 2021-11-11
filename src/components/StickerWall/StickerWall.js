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
import infibarcode from "../../assets/tape.svg";

function StickerWall() {
  return (
    <div className="stiWallDiv">
      <div className="barcodeDiv1">
        <img src={infibarcode} className="barcode firstBar" alt="landing"></img>
        <img src={infibarcode} className="barcode secondBar" alt="landing"></img>
        <img src={infibarcode} className="barcode thridBar" alt="landing"></img>
        <img src={infibarcode} className="barcode fourthBar" alt="landing"></img>
      </div>
      <div className="heading_stiwall">
        <img src={stickwallhead} className="stiheading" alt="landing"></img>
      </div>
      <div className="contStiWall">
        <img src={stiwall4} className="sticker2 stiCog" alt="landing"></img>
        <img src={stiwall7} className="sticker2 stiSmiley" alt="landing"></img>
        <a href="https://github.com/STCVIT" target="">
          <img src={stiwall5} className="sticker2 stiCalender" alt="landing"></img>
        </a>
        <img src={stiwall3} className="stiSuperb" alt="landing"></img>
        <img src={stiwall2} className="stiCode" alt="landing"></img>
        <img src={stiwall1} className="stiPosFu" alt="landing"></img>
        <img src={stiwall11} className="stiHand" alt="landing"></img>
        <img src={stiwall9} className="stiBlue" alt="landing"></img>
        <img src={stiwall10} className="stiTicket" alt="landing"></img>
        <img src={stiwall6} className="stiStandard" alt="landing"></img>
        <img src={stiwall8} className="stiNow" alt="landing"></img>
      </div>
      <div className="barcodeDiv2">
        <img src={infibarcode} className="barcode firstBar" alt="landing"></img>
        <img src={infibarcode} className="barcode secondBar" alt="landing"></img>
        <img src={infibarcode} className="barcode thridBar" alt="landing"></img>
        <img src={infibarcode} className="barcode fourthBar" alt="landing"></img>
      </div>
    </div>
  );
}

export default StickerWall;
