import React from "react";
import thankYouStar from "../../assets/ThankYouStar.gif";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram-logo.png";
import facebook from "../../assets/facebook.png";
import Nav2 from "../Nav/Nav2";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div>
      <Nav2 />
      <div className="thankYouMainContainer">
        <div className="thankYouBox">
          <img className="thankYouImage" src={thankYouStar} />
          <h3 className="thankYouText">WellDone... You completed the quiz</h3>
        </div>
        <div className="socials">
          <h6>Make sure to follow us</h6>
          <img className="socialsLogo" src={linkedin} />
          <img className="socialsLogo" src={instagram} />
          <img className="socialsLogo" src={facebook} />
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
