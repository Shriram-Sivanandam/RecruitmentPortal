import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./resultCheck.css";
import victorysign from "../../assets/Group 283.svg";
import youdidgreat from "../../assets/Frame 52615.png";
import star4 from "../../assets/Star 4.svg";
import smile from "../../assets/Emoji Smile.svg";
import infibarcode from "../../assets/tape.svg";
import waitisover from "../../assets/Group 48095350.svg";
import hand from "../../assets/Group 348.png";
import starillus from "../../assets/starillus.svg";
import ohyes from "../../assets/Group 381.svg";
import prize from "../../assets/Group 282.svg";
import toastError from "../ToastError";
import groupsticker from '../../assets/groupsticker.svg'
import groupsticker2 from '../../assets/groupsticker2.svg'


function ResultCheck() {
  const [regNo, setRegNo] = useState("");
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  function resultPageRedirect() {
    if (/[0-9]{2}[A-Z]{3}[0-9]{4}/.test(regNo) && selected.includes(regNo)) {
      history.push({
        pathname: "/result",
        state: {
          regNo: regNo,
        },
      });
    } else if (/[0-9]{2}[A-Z]{3}[0-9]{4}/.test(regNo)) {
      history.push("/not-selected");
    } else {
      toastError("Please enter an appropriate registration number.");
    }
  }

  const selected = [
    "21BCE3819",
    "21BCE0513",
    "21BCE2932",
    "21BCE0122",
    "21BCE3794",
    "21BCE0232",
    "21BKT0002",
    "21BCE2454",
    "21BCE3370",
    "21BCE2368",
    "21BCE3032",
    "21BIT0595",
    "21BCB0079",
    "21BIT0221",
    "21BCE0467",
    "21BCE0172",
    "21BBS0044",
    "21BCT0250",
    "21BCE0215",
    "21BCE3383",
    "21BCT0168",
    "21BBS0084",
    "21BCE2888",
    "21BBS0038",
    "21BCE0092",
    "21BCE2610",
    "21BCE0640",
    "21BIT0214",
    "21BCE0817",
    "21BEC2084",
    "21BCE0353",
    "21BIT0195",
    "21BCE0602",
    "21BCE3692",
    "21BCE2849",
    "21BEC0593",
    "21BCI0381",
    "21BIT0314",
    "21BEE0032",
    "21BCE2502",
    "21BCE2037",
    "21BMM0014",
    "21BCE2937",
    "21BCE2887",
    "21BCE2511",
    "21BCT0096",
    "21BCE2332",
    "20BDS0336",
    "20BIT0104",
    "20BCE0857",
    "20BIT0047",
    "20BCE0187",
    "20BBS0047",
    "20BCI0077",
    "20BCE2177",
    "20BKT0088",
    "20BIT0070",
    "20BCE0399",
    "20BCE0257",
    "20BCE0917",
    "20BCE0752",
    "20BIT0183",
    "20BEC0464",
    "20BCE2221",
    "20BCE2172",
    "20BIT0177",
    "20BCE0489",
    "20BBS0140",
    "20BCE0906",
    "20BDS0287",
    "20BCT0262",
    "20BBS0089",
    "20BCE0505",
    "20BCE0852",
    "20BEC0424",
    "20BBS0054",
    "20BCT0073",
    "20BCE0745",
    "20BCE0599",
    "20BCE2162",
    "20BCE2099",
    "20BEC0534",
    "20BIT0053",
    "20BCE0970",
    "20BCE0127",
    "19BCE0932",
    "19BIT0277",
    "19MIS0263",
    "19BIT0262",
    "19BBS0023",
    "19BCE2210",
    "19BIT0136",
    "19BCB0011",
    "19BCT0141",
    "19BCE2175",
    "19BCT0137",
    "19BIT0229",
  ];
  return (
    <>
      <div classname="resultContMain">
        <div className="resultInnerCont">
          <div className="resultHeadingCont">
            <h3 className="resultMainHeading5">
              Enter your{" "}
              <span className="resultMainHeading2">
                {" "}
                registration number
                <img className="vic" src={victorysign} alt="vic"></img>
              </span>
            </h3>
            <h3 className="resultSubHeading">to check your result</h3>
            <div className="row">
              <input
                className="inputregno"
                type="regno"
                value={regNo}
                onChange={(e) => {
                  e.preventDefault();
                  setDisabled(false);
                  setRegNo(e.target.value.trim().toUpperCase());
                }}
                placeholder="Enter your Registration Number"
              ></input>
            </div>
            <div className="row">
              <button
                disabled={disabled}
                onClick={resultPageRedirect}
                className="my-5 py-2 px-2"
                style={{ borderRadius: "6px" }}
              >
                {" "}
                Check result{" "}
              </button>
            </div>
          </div>
          <img
            className="youdidgreat"
            src={youdidgreat}
            alt="youdidgreat"
          ></img>
          <img className="waitisover" src={waitisover} alt="youdidgreat"></img>
          <img className="starillus" src={starillus} alt="youdidgreat"></img>
          <img className="hand" src={hand} alt="youdidgreat"></img>
          <img className="ohyes" src={ohyes} alt="youdidgreat"></img>
          <img className="star4" src={star4} alt="star4"></img>
          <img className="smile" src={smile} alt="star4"></img>
          <img className="prize" src={prize} alt="star4"></img>
          <img className="groupsticker" alt="alt" src={groupsticker}></img>
          <img className="groupsticker2" alt="alt" src={groupsticker2}></img>
          <div className="barcodeDiv1">
            <img src={infibarcode} className="barcode" alt="sticker"></img>
            <img src={infibarcode} className="barcode" alt="sticker"></img>
            <img src={infibarcode} className="barcode" alt="sticker"></img>
            <img src={infibarcode} className="barcode" alt="sticker"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultCheck;
