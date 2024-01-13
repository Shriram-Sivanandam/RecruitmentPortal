import React, { useLayoutEffect, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";
import designmobile from "../../assets/designmobile.png";
// import mgmt from '../../assets/mgmt.png'
import design from "../../assets/DesignRoadMap.png";
import designer from "../../assets/Frame.svg";
import registerbutton from "../../assets/Group 246 (2).svg";
import manager from "../../assets/Group 278.svg";
import developer from "../../assets/Group 3.svg";
import managementmobile from "../../assets/managementmobile.png";
import management from "../../assets/ManagementRoadMap.png";
import technicalmobile from "../../assets/technicalmobile.png";
import technical from "../../assets/TechnicalRoadMap.png";
import Button from "../Button";
import Connect from "../Connect/Connect";
// import Enough from "../Enough/Enough";
import EnoughScroll from "../Enough/GsapScroll";
import StickerWall from "../StickerWall/StickerWall";
import "./Landing1.css";
import herosectionMobile from "../../assets/herosection_mobile.svg";
import hamburgermenu from "../../assets/hamburger.svg";
import RotateLoader from "react-spinners/RotateLoader";

function Landing1() {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState("technical");
  const domain = ["technical", "management", "design"];
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="landingContLoader">
          <RotateLoader color={"#C33D59"} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <section style={{ backgroundColor: "black" }} className="pb-5">
            <nav
              className="navbar navbar-expand-lg navbar-dark container"
              id="nav"
              style={{ backgroundColor: "transparent" }}
            >
              <a className="navbar-brand ml-xs-0 pl-xs-0" href="/">
                <svg
                  width="43"
                  height="45"
                  viewBox="0 0 43 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.0713 14.6829V9.52959L22.1689 1L2 9.52959V23.8344L22.1689 32.1863L42.0713 23.8344V35.5626L22.1689 43.9145L2 35.5626L7.15329 33.2525"
                    stroke="#FBFFFE"
                    stroke-width="1.5"
                  />
                  <path
                    d="M22.3105 43.7452V12.1146"
                    stroke="#FBFFFE"
                    stroke-width="1.5"
                  />
                  <path
                    d="M10.1741 12.2839L33.897 12.2839"
                    stroke="#FBFFFE"
                    stroke-width="1.5"
                  />
                  <circle
                    r="0.905197"
                    transform="matrix(-1 0 0 1 42.0948 17.3029)"
                    fill="#FBD6CC"
                  />
                </svg>
              </a>

              {width < 991 && (
                <Link to="/quiz-dashboard">
                  <div className="ml-auto mr-1">
                    <Button />
                  </div>
                </Link>
              )}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="harmburger">
                  <img src={hamburgermenu} alt="HamBurgerMenu" />
                </span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <div id="navshit" style={{ marginRight: "3rem" }}>
                    <Link to="/register">
                      <li className="nav-item  mx-3 my-3">
                        <a href="  " className="button current" id="aa">
                          <h5 className="landingNavHeaders">Register</h5>
                        </a>
                      </li>
                    </Link>

                    <SmoothLink to="roadMapScroll" smooth={true}>
                      <li className="nav-item mx-3 my-3">
                        <a href=" " className="button current" id="aa">
                          <h5 className="landingNavHeaders">Roadmap</h5>
                        </a>
                      </li>
                    </SmoothLink>

                    <SmoothLink to="connectScroll" smooth={true}>
                      <li class="nav-item mx-3 my-3 current">
                        <a href="/" className="button" id="aa">
                          <h5 className="landingNavHeaders">Contact</h5>
                        </a>
                      </li>
                    </SmoothLink>

                    <Link to="/result">
                      <li className="nav-item mx-3 my-3">
                        <a href=" " className="button current" id="aa">
                          <h5 className="landingNavHeaders">Result</h5>
                        </a>
                      </li>
                    </Link>
                  </div>
                </ul>
              </div>
              <Link to="/quiz-dashboard" style={{ textDecoration: "none" }}>
                <li class="nav-item mr-auto">{width > 991 && <Button />}</li>
              </Link>
            </nav>

            <div className="container mt-3">
              <div className="row mobilehero hideMobile">
                <div className="col-2" id="ilus_grid">
                  <div className="row">
                    <img
                      src={designer}
                      className=" img-fluid aniDesigner"
                      alt="d"
                    ></img>
                  </div>
                  <div className="row mt-lg-5">
                    <img
                      src={developer}
                      className=" img-fluid aniDeveloper"
                      alt="d"
                    ></img>
                  </div>
                </div>
                <div
                  className="col-lg-8 col-md-12 container heroSection"
                  id="wearestc"
                >
                  <div className="row my-lg-3 my-md-1 mx-lg-auto mx-xs-1 mx-md-auto">
                    <h1 className="my-auto aniWeAre" id="weare">
                      WE ARE{" "}
                    </h1>

                    <svg
                      id="arrow"
                      className="my-auto mx-lg-3 mx-1 aniArrow"
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M68.437 34.9365L34.5235 1.02307M68.437 34.9365L34.5235 68.85M68.437 34.9365H0.322632"
                        stroke="#FBFFFE"
                        stroke-width="1.14961"
                      />
                    </svg>

                    <h1 className="my-auto aniTeam" id="team">
                      {" "}
                      Team STC{" "}
                    </h1>
                  </div>

                  <div className="row my-lg-3 my-md-1 mx-lg-auto mx-xs-1 mx-md-auto">
                    <h1 className="aniGive" id="wegiveout">
                      {" "}
                      WE GIVE OUT{" "}
                    </h1>

                    <svg
                      className="my-lg-3 mx-2 aniReallyOne"
                      id="really"
                      width="178"
                      height="37"
                      viewBox="0 0 178 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.6 29.5C34.3 33.1 33.8 33.75 33.15 33.75C32.15 33.75 32 32.6 31.5 26.4C30.9 19.65 27.6 17.4 21.85 16.6C27.4 15.65 30.85 13 30.85 8.25C30.85 2.55 25.95 0.349997 17.95 0.349997C14.75 0.349997 11.05 0.949998 3 0.999998H0.25V1.85C1.75 2.25 2.3 3.2 2.3 5.6V31.4C2.3 33.8 1.75 34.75 0.25 35.1V36H16.25V35.1C14.8 34.75 14.2 33.8 14.2 31.4V16.75C15.2 16.95 15.7 17 16.7 17C19 17 19.2 19.2 19.75 26.1C20.3 33.65 22.8 36.65 28.5 36.65C34.15 36.65 35.25 34.7 35.6 29.6L34.6 29.5ZM16.25 16C15.5 16 15 15.95 14.2 15.75V1.65C15 1.45 15.5 1.35 16.2 1.35C18.4 1.35 19.75 3.45 19.75 8.4C19.75 12.7 18.65 16 16.25 16ZM62.2805 22.55C60.7305 33.95 59.1805 35 56.1805 35H50.4305V17.85H54.1805C56.9305 17.85 57.1805 18.35 57.8305 24.15H58.8805L57.8305 11.1H56.8305C57.1305 16.35 56.7305 16.85 54.3305 16.85H50.4305V2H55.5305C58.8805 2 60.0805 3.05 61.6305 13.9H62.6305L61.3305 0.999998H36.4805V1.85C37.9805 2.25 38.5305 3.2 38.5305 5.6V31.4C38.5305 33.8 37.9805 34.75 36.4805 35.1V36H62.0305L63.2805 22.55H62.2805ZM85.1473 0.349997H84.6473C82.3973 2.15 79.0973 2.35 73.0473 2.35V2.85L73.4473 4.65L67.2973 31.5C66.7473 33.85 65.6973 34.75 64.1973 35.1V36H70.2973V35.1C68.1473 34.75 67.7973 33.85 68.3473 31.55L69.4973 26.55H78.1973L79.2473 31.5C79.7473 33.85 79.3473 34.75 77.1973 35.1V36H94.8973V35.1C93.3973 34.75 92.3973 33.85 91.8473 31.5L85.1473 0.349997ZM73.9473 7.1L77.9473 25.55H69.7473L73.9473 7.1ZM121.65 22.55C119.85 33.95 118.5 35 114.75 35H110.05V5.6C110.05 3.2 110.65 2.25 112.1 1.85V0.999998H96.0996V1.85C97.5996 2.25 98.1496 3.2 98.1496 5.6V31.4C98.1496 33.8 97.5996 34.75 96.0996 35.1V36H121.4L122.65 22.55H121.65ZM149.482 22.55C147.682 33.95 146.332 35 142.582 35H137.882V5.6C137.882 3.2 138.482 2.25 139.932 1.85V0.999998H123.932V1.85C125.432 2.25 125.982 3.2 125.982 5.6V31.4C125.982 33.8 125.432 34.75 123.932 35.1V36H149.232L150.482 22.55H149.482ZM177.008 0.999998H170.858V1.85C173.008 2.25 173.058 3.05 172.208 5.3L167.358 17.95L162.408 5.3C161.558 3.05 161.558 2.25 163.758 1.85V0.999998H145.008V1.85C146.508 2.25 147.908 3.05 148.858 5.25L155.858 21.95V31.4C155.858 33.8 155.308 34.75 153.808 35.1V36H169.808V35.1C168.358 34.75 167.758 33.8 167.758 31.4V19.8L173.308 5.3C174.158 3.05 175.508 2.25 177.008 1.85V0.999998Z"
                        fill="#FBFFFE"
                      />
                    </svg>

                    <h1 className="aniCool" id="cool">
                      {" "}
                      COOL
                    </h1>
                  </div>

                  <br />
                  <div
                    className="row mb-lg-2 mx-lg-auto mx-xs-1 mx-md-auto"
                    style={{ marginTop: "-1.5rem" }}
                  >
                    <h1
                      className="aniOpp"
                      id="opportunities"
                      style={{ marginRight: "5px" }}
                    >
                      {" "}
                      OPPORTUNITIES{" "}
                    </h1>

                    <svg
                      id="for1"
                      className="mx-1 aniStar"
                      width="73"
                      height="67"
                      viewBox="0 0 73 67"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M36.556 0.40979C36.556 32.9415 32.9414 36.5562 0.409668 36.5562C32.9414 36.5562 36.556 40.1708 36.556 72.7025C36.556 40.1708 40.1707 36.5561 72.7024 36.5562C40.1707 36.5562 36.556 32.9415 36.556 0.40979Z"
                        stroke="#EC4939"
                        stroke-width="1.20488"
                      />
                    </svg>

                    <h1
                      id="for"
                      className="mr-2 aniFor"
                      style={{ marginLeft: "5px" }}
                    >
                      FOR
                    </h1>

                    <h1 className="aniReally" id="really1">
                      REALLY
                    </h1>
                  </div>

                  <div className="row my-lg-3 my-md-1 mx-lg-auto mx-xs-1 mx-md-auto">
                    <h1 className="aniTalented" id="talented">
                      {" "}
                      TALENTED{" "}
                    </h1>
                    <div className="col">
                      <svg
                        className="mx-2 aniSmiley"
                        id="smiley"
                        width="52"
                        height="52"
                        viewBox="0 0 52 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="#FEB913"
                          d="M23.938 7.88499L22.7316 16.257M32.31 9.09133L31.1036 17.4633M46.581 28.6666C44.9154 40.226 34.1945 48.2464 22.6351 46.5808C11.0758 44.9152 3.05532 34.1943 4.72092 22.635M50.3484 29.2095C48.383 42.8495 35.7323 52.3137 22.0923 50.3483C8.45225 48.3828 -1.0119 35.7321 0.953516 22.0921C2.91893 8.45208 15.5696 -1.01207 29.2097 0.953345C42.8497 2.91876 52.3138 15.5695 50.3484 29.2095Z"
                          stroke="#343434"
                          stroke-width="0.845848"
                        />
                      </svg>
                      <h1 className="mx-lg-5 pl-3 aniPeople" id="people">
                        {" "}
                        PEOPLE{" "}
                      </h1>
                    </div>
                  </div>
                  <div className="d-flex flex-column-reverse">
                    <Link to="/register">
                      <div
                        className="row mb-4 mt-5"
                        style={{ marginRight: "2rem" }}
                      >
                        <div className="mx-auto registerButtonMobile">
                          <img
                            src={registerbutton}
                            alt="register"
                            className="registerButton"
                          ></img>
                        </div>
                      </div>
                    </Link>
                    <div className="d-flex" id="mobileonly1">
                      <div>
                        <img
                          src={designer}
                          className="sticker-hero-mobile"
                          alt="d"
                        ></img>
                      </div>
                      <div>
                        <img
                          src={developer}
                          className="sticker-hero-mobile"
                          alt="d"
                        ></img>
                      </div>
                      <div>
                        <img
                          src={manager}
                          className="sticker-hero-mobile"
                          alt="d"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-2"
                  id="col2"
                  style={{ marginRight: "-4rem" }}
                >
                  <img
                    src={manager}
                    className="mb-5 pb-5 img-fluid aniManager"
                    alt="d"
                    style={{ marginTop: "8rem" }}
                  ></img>
                </div>
              </div>
            </div>
            <Link to="/register">
              <div
                className="showOnMobile"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={herosectionMobile}
                    alt="HeroSection"
                    className="hero-section-mobile"
                  />
                </div>
                <div className="mx-auto registerButtonMobile2">
                  <img
                    src={registerbutton}
                    alt="register"
                    className="registerButton"
                    style={{ width: "55vw", height: "auto" }}
                  ></img>
                </div>
              </div>
            </Link>
            <StickerWall />
            <div className="container py-5" name="roadMapScroll">
              <div className="d-flex justify-content-around mb-lg-5">
                {domain.map((field, idx) => {
                  return (
                    <div
                      key={idx}
                      className={
                        active === field ? `${field}-active` : `${field}`
                      }
                      style={{
                        fontFamily: "BriceRegular",
                        fontWeight: "bold",
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                      onClick={() => {
                        setActive(field);
                      }}
                    >
                      {field}
                    </div>
                  );
                })}
              </div>
              <div className={width < 600 ? "d-none" : ""}>
                <img
                  src={
                    active === "technical"
                      ? technical
                      : active === "design"
                      ? design
                      : management
                  }
                  className="w-100 img-fluid "
                  alt="roadMap"
                />
              </div>
            </div>
            <div className={width > 600 ? "d-none" : "roadMapDiv"}>
              <img
                id={active}
                src={
                  active === "technical"
                    ? technicalmobile
                    : active === "design"
                    ? designmobile
                    : managementmobile
                }
                className="w-100 img-fluid roadMapMobile"
                alt="roadMap"
              />
            </div>

            <EnoughScroll />
            <Link to="/register">
              <div className="row container mx-auto mb-3 mt-n5">
                <div className="mx-auto">
                  <img
                    src={registerbutton}
                    alt="registerButton"
                    className="registerButton enoughBtn"
                  ></img>
                </div>
              </div>
            </Link>
          </section>
          <div name="connectScroll">
            <Connect />
          </div>
        </>
      )}
    </div>
  );
}

export default Landing1;
