import React from "react";
// import { Link } from "react-router-dom";

// import Nav2 from "../Nav/Nav2";
import "./NotSelected.css";
// import thankyouBlue from "../../assets/thankyoubluecog.svg";
import keephustling from "../../assets/keephustling.svg";
// import thankyouBtnGotIt from "../../assets/thankyouBTN.svg";
// import { ReactComponent as InstaSticker } from "../../assets/instaRed.svg";
// import { ReactComponent as LinkedIn } from "../../assets/linkdinBlue.svg";
// import { ReactComponent as WebSticker } from "../../assets/webYellow.svg";
// import { ReactComponent as GitSticker } from "../../assets/gitGreen.svg";
// import { ReactComponent as DiscordSticker } from "../../assets/disclogo.svg";
// import { ReactComponent as WhatsAppSticker } from "../../assets/whatsapplogo.svg";
import betterluck from "../../assets/betterluck.svg";
// import group296 from "../../assets/Group 296.svg";
import insta from "./insta.png";
import whatsapp from "./whatsapp.png";
import discord from "./discord.png";
function NotSelected() {
  return (
    <section className="thankyouContMain" style={{ backgroundColor: "black" }}>
      <div className="container thankCont">
        <div className="thankyouTopCont">
          <img className="betterluck" alt="sticker" src={betterluck} />
          <img className="keephustling" alt="sticker" src={keephustling} />

          <h1 className="thankyouHeading2 my-2"> Sorry ! </h1>
        </div>
        <h3 className="thankyouText2 mt-lg-3">
          Unfortunately we will not be able to accept your application at this
          time.
        </h3>
        <h3 className="thankyouText2 mt-lg-5">
          We thank you for showing interest in the
        </h3>
        <h3 className="thankyouText3"> STUDENT TECHNICAL COMMUNITY.</h3>

        <h4 className="thankyouFollowHeading">
          You can still be a part of the community and stay connected with us by
          following us on social media handles
        </h4>
        <div className="container d-flex my-5 " style={{ maxWidth: "800px" }}>
          {[
            {
              url: "https://instagram.com/stcvit",
              image: insta,
            },
            {
              url: "https://chat.whatsapp.com/GU178EHE1ym0EcjSDtj9W4",
              image: whatsapp,
            },
            {
              url: "https://discord.gg/Kv2vjUYZ",
              image: discord,
            },
          ].map((social) => (
            <div className="thankyouSocialsSticker col-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                style={{ width: "100%" }}
              >
                <img
                  src={social.image}
                  style={{ width: "100%" }}
                  alt="social logo"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NotSelected;
