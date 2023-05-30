import React from "react";
import Nav2 from "../Nav/Nav2";
import thankyouBlue from "../../assets/thankyouBlue.svg";
import thankyouStars from "../../assets/thankyouStars.svg";

function ThankYou() {
  return (
    <div className="thankyouContMain">
      <Nav2 />
      <img src={thankyouBlue} />
      <div>Aptitude Quiz Completed</div>
      <img src={thankyouStars} />
    </div>
  );
}

export default ThankYou;
