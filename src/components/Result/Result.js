import React from "react";
import "./Result.css";
import { useLocation } from "react-router-dom";
import resultSticker from "../../assets/resultstickerfinal2.svg";
import boardSticker from "../../assets/boardSticker.svg";
import seniorSticker from "../../assets/seniorSticker.svg";
import resultFire from "../../assets/resultFire.svg";
import resultDragon from "../../assets/resultDragon.svg";
import resultPopcorn from "../../assets/resultPopcorn.svg";
import resultStar from "../../assets/resultStar.svg";
import resultCool from "../../assets/resultCool.svg";
import infibarcode from "../../assets/tape.svg";
import confetti from "./confetti.json";
import simpchad from '../../assets/simpchad2.svg'
import { Player } from "@lottiefiles/react-lottie-player";

function Result() {
  const location = useLocation();
  if (location.state === undefined) {
    window.location.href = "/result-check";
  }
  const { regNo } = location.state;
  const selected = {
    "21BCE3819": "Sameeksha S",
    "21BCE0513": "Garima Srivastava",
    "21BCE2932": "Astha Jha",
    "21BCE0122": "Sharvil Karwa",
    "21BCE3794": "Yashita",
    "21BCE0232": "Swayam",
    "21BKT0002": "Ananay",
    "21BCE2454": "Shalavya",
    "21BCE3370": "Arushi",
    "21BCE2368": "Akash",
    "21BCE3032": "Ramya",
    "21BIT0595": "Khush",
    "21BCB0079": "Dhruv",
    "21BIT0221": "Manan",
    "21BCE0467": "Khushal",
    "21BCE0172": "Shabnam",
    "21BBS0044": "Anitej",
    "21BCT0250": "Naman",
    "21BCE0215": "Santanu",
    "21BCE3383": "Sakshi Rajpal",
    "21BCT0168": "Anirudh Mishra",
    "21BBS0084": "Shrihari",
    "21BCE2888": "Dev Mehta",
    "21BBS0038": "Soumya Rathi",
    "21BCE0092": "Shruthi",
    "21BCE2610": "Rithik",
    "21BCE0640": "Mehul",
    "21BIT0214": "Vandit",
    "21BCE0817": "Mohit",
    "21BEC2084": "Siddharth",
    "21BCE0353": "Nandhika Jhansi",
    "21BIT0195": "Rishabh B",
    "21BCE0602": "Gaurav",
    "21BCE3692": "Abhijai",
    "21BCE2849": "Samridhi Joshi",
    "21BEC0593": "Ansh Goenka",
    "21BCI0381": "Pranav",
    "21BIT0314": "Tanya",
    "21BEE0032": "Sarim",
    "21BCE2502": "Divyaraj",
    "21BCE2037": "Siva",
    "21BMM0014": "Govind Purohit",
    "21BCE2937": "Sonal",
    "21BCE2887": "Ayush",
    "21BCE2511": "Jatin",
    "21BCT0096": "Khushi",
    "21BCE2332": "Yashaswini",
    "20BDS0336": "Sankeshwar",
    "20BIT0104": "Anubhav Chachra",
    "20BCE0857": "Malvika Singh",
    "20BIT0047": "Rishab Agrawal",
    "20BCE0187": "Oishi Poddar",
  };

  const board = {
    "19BCE0932": "Vaibhav Chopra ",
    "19BIT0277": "Vasu Manhas ",
    "19MIS0263": "Niharika Gupta",
    "19BIT0262": "Rishab Budhia",
    "19BBS0023": "Aravind",
    "19BCE2210": "Deepesh",
    "19BIT0136": "Yash Singhal",
    "19BCB0011": "Samarthya Jha ",
    "19BCT0141": "Mihir Mulay 🥔",
    "19BCE2175": "Prajesh Kumar ",
    "19BCT0137": "Anay",
    "19BIT0229": "Prateek",
  };
  const senior = {
    "20BBS0047": "Aarushi",
    "20BCI0077": "Adam",
    "20BCE2177": "Aman",
    "20BKT0088": "Panda",
    "20BIT0070": "Arsal",
    "20BCE0399": "Arya",
    "20BCE0257": "Bhavik ",
    "20BCE0917": "Dwija OP",
    "20BCE0752": "Harshita",
    "20BIT0183": "Kaushal",
    "20BEC0464": "Kavita",
    "20BCE2221": "Mayank",
    "20BCE2172": "Mayur",
    "20BIT0177": "Megha",
    "20BCE0489": "Muazz",
    "20BBS0140": "Mohit",
    "20BCE0906": "Nishanth",
    "20BDS0287": "Preetish",
    "20BCT0262": "Prerit",
    "20BBS0089": "Rahul",
    "20BCE0505": "Sejal",
    "20BCE0852": "Shreyan",
    "20BEC0424": "Shriram",
    "20BBS0054": "Suryakant",
    "20BCT0073": "Swarup",
    "20BCE0745": "Tanmay",
    "20BCE0599": "Vanshika",
    "20BCE2162": "Vineet",
    "20BCE2099": "Vyom",
    "20BEC0534": "Yash Hatwar",
    "20BIT0053": "Yash Jasani",
    "20BCE0970": "Yash Kasera",
    "20BCE0127": "Deep",
  };
  var regno = regNo.trim();
  return (
    <div classname="resultContMain">
      <div className="resultInnerCont">
        <Player
          autoplay
          src={confetti}
       
          className="resultConfetti"
        />
        {regNo.trim() in senior ? (
          <img src={resultDragon} alt="dragon" className="resultDragon" />
        ) : (
          <></>
        )}

        <div className="resultHeadingCont">
          <h1 className="resultMainHeading">STC Family</h1>
          {regNo.trim() in selected ? (
            <>
               <h3 className="resultSubHeading">Welcomes You Aboard</h3>
            </>
          ) : regNo.trim() in board ? (
            <>
                <h3 className="resultSubHeading"> Loves you all  </h3>
            </>
          ) : (
            <>
           <h3 className="resultSubHeading"> Owes you a pizza  </h3>
            </>
          )}
        
        </div>
        <div className="resultstickerbox">
          {regNo.trim() in selected ? (
            <>
              <h6 className="resultHeading">{selected[regno]}</h6>
              <img
                className="resultSticker"
                src={resultSticker}
                alt="you are selected"
              />
            </>
          ) : regNo.trim() in board ? (
            <>
              <h6 className="resultHeading1">{board[regno]}</h6>
              <img
                className="resultSticker"
                src={boardSticker}
                alt="you are selected"
              />
            </>
          ) : (
            <>
              <h6 className="resultHeading2">{senior[regno]}</h6>
              <img
                className="resultSticker"
                src={seniorSticker}
                alt="you are selected"
              />
            </>
          )}
          <div className="belowTicketCont">
            <h6 className="resultBelowTicket">Congratulations</h6>
            <img src={resultFire} alt="fire" className="resultFire" />
          </div>
        </div>
        <img src={resultPopcorn} alt="popcorn" className="resultPopcorn" />
        <img src={resultStar} alt="star" className="resultStar" />
        <img src={resultCool} alt="cool" className="resultCool" />
        <img src={simpchad} alt="cool" className="simpchad" />
        <div className="barcodeDiv1 resultBarCode">
          <img src={infibarcode} className="barcode" alt="sticker"></img>
          <img src={infibarcode} className="barcode" alt="sticker"></img>
          <img src={infibarcode} className="barcode" alt="sticker"></img>
          <img src={infibarcode} className="barcode" alt="sticker"></img>
        </div>
        <div className="sideTextContMain">
          <h1 className="sideTextHeading">YAY YOU</h1>
          <h1 className="sideTextHeading secondLineSide">MADE IT</h1>
        </div>
      </div>
    </div>
  );
}

export default Result;
