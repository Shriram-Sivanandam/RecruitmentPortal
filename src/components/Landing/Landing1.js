import React, { useLayoutEffect, useState } from "react";
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
import Enough from "../Enough/Enough";
import StickerWall from "../StickerWall/StickerWall";
import "./Landing1.css";
import herosectionMobile from "../../assets/herosection_mobile.svg";
import hamburgermenu from "../../assets/hamburger.svg";

function Landing1() {
  const [width, setWidth] = useState(window.innerWidth);
  const [active, setActive] = useState("technical");
  const domain = ["technical", "management", "design"];
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
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
            <div className="ml-auto mr-1">
              <Button />
            </div>
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
                      <svg
                        width="88"
                        height="19"
                        viewBox="0 0 88 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5239 14.2826C11.9523 14.2826 12.3534 14.1823 12.7362 13.9818C13.1099 13.7904 13.3925 13.5351 13.5748 13.2343L13.4472 8.79537C13.0552 9.73421 12.4901 10.2993 11.4692 10.2993C10.7127 10.2993 10.339 9.68864 9.82854 9.07794C9.63713 8.86829 9.45483 8.66776 9.26342 8.48546C8.8897 8.12998 8.25166 7.85653 7.49512 7.85653H7.45866V7.74715H7.69565C10.3481 7.78361 12.4536 6.36168 12.4263 4.27436C12.4354 2.1597 10.2934 0.892723 7.6045 0.929183H0.175827C0.38547 1.86802 0.494849 3.18057 0.494849 4.84861V10.0806C0.494849 11.7304 0.38547 13.0429 0.175827 14H4.26843C4.04056 13.0612 3.93118 11.7577 3.93118 10.0806V8.67688C4.0679 8.60396 4.47808 8.5675 5.1617 8.5675C6.93911 8.5675 7.56804 9.68864 8.06025 10.9556C8.66183 12.5143 9.15404 14.2826 11.5239 14.2826ZM3.93118 4.18321H7.01203C7.57715 4.18321 8.04202 4.31082 8.40661 4.56604C8.77121 4.82126 8.95351 5.1494 8.95351 5.54134C8.95351 6.38903 8.12405 6.92681 6.85707 6.92681H3.93118V4.18321ZM20.1922 14.2643C21.0581 14.2643 21.9332 14.1823 22.8264 14.0091C23.7197 13.8359 24.3942 13.6263 24.8591 13.362L24.8044 10.828C24.4671 11.1926 23.9476 11.4843 23.2457 11.703C22.5439 11.9309 21.8056 12.0403 21.0399 12.0403C18.9435 12.0767 17.0658 10.8645 17.0202 9.38784L17.157 9.31492C18.1505 9.99854 19.463 10.3449 21.0946 10.3449C23.7288 10.3449 25.0869 9.52457 25.0869 7.72892C25.0869 6.84478 24.6859 6.05178 23.8838 5.42285C23.0725 4.79392 21.6688 4.40197 19.8823 4.40197C18.0593 4.40197 16.528 4.94887 15.5527 5.84213C14.5774 6.7354 14.0396 7.9568 14.0396 9.33315C14.0396 10.8007 14.5957 11.9856 15.7168 12.8971C16.8379 13.8086 18.3237 14.2643 20.1922 14.2643ZM19.8459 9.15085C18.7065 9.15085 17.8041 8.90475 17.1205 8.42166C17.2299 7.82919 17.5215 7.36433 18.0046 7.02707C18.4877 6.69894 19.0437 6.53487 19.6727 6.53487C20.3563 6.53487 20.9032 6.66248 21.3316 6.9177C21.76 7.18203 21.9696 7.51928 21.9696 7.92945C21.9696 8.75891 20.8941 9.15085 19.8459 9.15085ZM31.9596 18.2749C35.4689 18.284 38.5862 16.7527 38.5862 13.5716C38.5862 13.0885 38.4586 12.5872 38.2125 12.0585V8.58573C38.2125 7.06353 38.3218 5.75098 38.5315 4.66631H34.4662C34.6029 5.04002 34.7032 5.35904 34.7579 5.62337C34.8035 5.88771 34.8308 6.21585 34.8308 6.60779V6.9815H34.5938C34.3021 6.20673 33.8191 5.5778 33.1445 5.10382C32.4609 4.63896 31.6406 4.40197 30.6744 4.40197C27.7941 4.40197 26.2445 6.60779 26.2445 9.33315C26.2445 10.2629 26.4086 11.0923 26.7459 11.8306C27.0831 12.569 27.5844 13.1523 28.2681 13.5989C28.9517 14.0456 29.7538 14.2643 30.6926 14.2643C31.6588 14.2643 32.4792 14.0182 33.1445 13.5351C33.8099 13.052 34.3021 12.4231 34.6121 11.6483H34.7944C35.1589 12.1041 35.3412 12.5963 35.3412 13.125C35.3412 14.1003 34.9766 14.8386 34.2566 15.3399C33.5274 15.8412 32.5612 16.0873 31.3671 16.0873C30.4283 16.0873 29.4986 15.9506 28.5689 15.6771C27.6391 15.4037 26.9008 15.03 26.3448 14.556V17.4363C27.0375 17.7007 27.8852 17.9103 28.8879 18.0561C29.8905 18.202 30.9114 18.2749 31.9596 18.2749ZM32.1328 11.9674C31.3216 11.9674 30.6562 11.7213 30.1457 11.2291C29.6353 10.7369 29.3801 10.1079 29.3801 9.33315C29.3801 8.57661 29.6353 7.94768 30.1457 7.45548C30.6562 6.96327 31.3216 6.71717 32.1328 6.71717C32.8984 6.71717 33.5274 6.96327 34.0196 7.46459C34.5118 7.96591 34.7579 8.58573 34.7579 9.33315C34.7579 10.0259 34.5027 10.6366 34.0014 11.1653C33.5 11.703 32.8711 11.9674 32.1328 11.9674ZM42.6058 3.65455C43.1801 3.65455 43.6267 3.49959 43.964 3.18057C44.3012 2.87066 44.4653 2.47872 44.4653 1.99563C44.4653 1.51254 44.3012 1.11148 43.964 0.792459C43.6267 0.473436 43.1801 0.318482 42.6058 0.318482C42.0498 0.318482 41.6032 0.473436 41.266 0.792459C40.9287 1.11148 40.7555 1.51254 40.7555 1.99563C40.7555 2.46961 40.9287 2.86155 41.266 3.18057C41.6032 3.49959 42.0498 3.65455 42.6058 3.65455ZM44.6749 14C44.438 13.0885 44.3195 11.7851 44.3195 10.0806V6.57133C44.3195 5.77833 44.365 5.1494 44.4471 4.66631C44.046 4.94887 43.4535 5.08559 42.6605 5.08559C41.8675 5.08559 41.2477 4.94887 40.792 4.66631C40.874 5.04913 40.9196 5.68718 40.9196 6.57133V10.0806C40.9196 11.7851 40.8011 13.0885 40.5641 14H44.6749ZM51.028 14.2643C52.5776 14.2643 53.7899 13.9909 54.6558 13.444C55.5217 12.8971 55.9592 12.1588 55.9592 11.2199C55.9592 7.71069 49.2324 9.20554 49.2324 7.71069C49.2324 7.20026 49.9707 6.87212 51.1739 6.87212C51.9031 6.87212 52.6323 6.96327 53.3524 7.15468C54.0724 7.3461 54.6467 7.55574 55.0933 7.78361V5.20409C53.7716 4.66631 52.3862 4.40197 50.9369 4.40197C49.4512 4.40197 48.3027 4.67542 47.4732 5.22232C46.6438 5.76921 46.2336 6.45283 46.2336 7.28229C46.2336 9.06882 47.9107 9.56103 49.597 9.80713C51.2742 10.0532 52.9513 10.0532 52.9513 10.8645C52.9513 11.4478 52.2312 11.7395 50.8002 11.7395C50.1166 11.7395 49.3236 11.6301 48.4121 11.4022C47.4915 11.1744 46.7167 10.9009 46.0786 10.5819V13.3984C46.662 13.6263 47.455 13.8268 48.4576 14.0091C49.4603 14.1823 50.3171 14.2643 51.028 14.2643ZM62.923 14.2643C63.716 14.2643 64.6002 14.0456 65.1197 13.7539V11.1106C64.8189 11.3567 64.2356 11.539 63.6431 11.539C62.4491 11.539 61.729 10.9009 61.729 9.61572V6.10647H65.0286V4.66631H61.729V0.929183L58.5661 1.77687V4.66631H56.6884V6.10647H58.5661V10.7915C58.5661 13.4258 60.5076 14.2643 62.923 14.2643ZM72.2385 14.2643C73.1044 14.2643 73.9795 14.1823 74.8727 14.0091C75.766 13.8359 76.4405 13.6263 76.9054 13.362L76.8507 10.828C76.5134 11.1926 75.9939 11.4843 75.292 11.703C74.5902 11.9309 73.8519 12.0403 73.0862 12.0403C70.9898 12.0767 69.1121 10.8645 69.0665 9.38784L69.2032 9.31492C70.1968 9.99854 71.5093 10.3449 73.1409 10.3449C75.7751 10.3449 77.1332 9.52457 77.1332 7.72892C77.1332 6.84478 76.7322 6.05178 75.9301 5.42285C75.1188 4.79392 73.7151 4.40197 71.9286 4.40197C70.1056 4.40197 68.5743 4.94887 67.599 5.84213C66.6237 6.7354 66.0859 7.9568 66.0859 9.33315C66.0859 10.8007 66.6419 11.9856 67.7631 12.8971C68.8842 13.8086 70.3699 14.2643 72.2385 14.2643ZM71.8921 9.15085C70.7528 9.15085 69.8504 8.90475 69.1668 8.42166C69.2762 7.82919 69.5678 7.36433 70.0509 7.02707C70.534 6.69894 71.09 6.53487 71.719 6.53487C72.4026 6.53487 72.9495 6.66248 73.3779 6.9177C73.8063 7.18203 74.0159 7.51928 74.0159 7.92945C74.0159 8.75891 72.9404 9.15085 71.8921 9.15085ZM82.9212 14C82.6842 13.4075 82.5657 12.5781 82.5657 11.5207V10.0259C82.5657 9.18731 82.8665 8.47635 83.459 7.90211C84.0515 7.32787 84.7533 7.03619 85.5554 7.03619C85.9474 7.03619 86.3393 7.10911 86.713 7.24583C87.0867 7.38256 87.3784 7.55574 87.5881 7.74715V4.66631C87.1141 4.49312 86.631 4.40197 86.1388 4.40197C84.4161 4.40197 83.1855 5.59603 82.7754 7.67424H82.5657V6.9815C82.5657 6.58044 82.6113 6.16116 82.7116 5.71452C82.8118 5.27701 82.9394 4.93064 83.0944 4.66631H78.8559C79.0656 5.62337 79.175 6.78097 79.175 8.1391V10.8645C79.175 12.0129 79.0656 13.0612 78.8559 14H82.9212Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                </Link>

                <SmoothLink to="roadMapScroll" smooth={true}>
                  <li className="nav-item mx-3 my-3">
                    <a href=" " className="button current" id="aa">
                      <svg
                        width="101"
                        height="18"
                        viewBox="0 0 101 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5239 14.2826C11.9523 14.2826 12.3534 14.1823 12.7362 13.9818C13.1099 13.7904 13.3925 13.5351 13.5748 13.2343L13.4472 8.79537C13.0552 9.73421 12.4901 10.2993 11.4692 10.2993C10.7127 10.2993 10.339 9.68864 9.82854 9.07794C9.63713 8.86829 9.45483 8.66776 9.26342 8.48546C8.8897 8.12998 8.25166 7.85653 7.49512 7.85653H7.45866V7.74715H7.69565C10.3481 7.78361 12.4536 6.36168 12.4263 4.27436C12.4354 2.1597 10.2934 0.892723 7.6045 0.929183H0.175827C0.38547 1.86802 0.494849 3.18057 0.494849 4.84861V10.0806C0.494849 11.7304 0.38547 13.0429 0.175827 14H4.26843C4.04056 13.0612 3.93118 11.7577 3.93118 10.0806V8.67688C4.0679 8.60396 4.47808 8.5675 5.1617 8.5675C6.93911 8.5675 7.56804 9.68864 8.06025 10.9556C8.66183 12.5143 9.15404 14.2826 11.5239 14.2826ZM3.93118 4.18321H7.01203C7.57715 4.18321 8.04202 4.31082 8.40661 4.56604C8.77121 4.82126 8.95351 5.1494 8.95351 5.54134C8.95351 6.38903 8.12405 6.92681 6.85707 6.92681H3.93118V4.18321ZM22.3798 13.8724C23.8655 13.362 24.8044 12.4505 25.3148 11.2564C25.5609 10.6639 25.6885 10.0168 25.6885 9.33315C25.6885 8.64953 25.5609 8.00237 25.3148 7.4099C24.8044 6.22496 23.8747 5.30435 22.3798 4.7848C21.6324 4.52958 20.7938 4.40197 19.8641 4.40197C18.9344 4.40197 18.0958 4.52958 17.3484 4.7848C15.8535 5.30435 14.9238 6.22496 14.4225 7.4099C14.1673 8.00237 14.0396 8.64953 14.0396 9.33315C14.0396 10.0168 14.1673 10.6548 14.4225 11.2473C14.9238 12.4322 15.8535 13.362 17.3484 13.8724C18.0958 14.1367 18.9344 14.2643 19.8641 14.2643C20.7938 14.2643 21.6324 14.1367 22.3798 13.8724ZM17.9408 11.2473C17.4395 10.746 17.1934 10.1079 17.1934 9.33315C17.1934 8.55838 17.4395 7.91122 17.9408 7.4099C18.4422 6.90858 19.0802 6.66248 19.8641 6.66248C20.648 6.66248 21.286 6.90858 21.7873 7.4099C22.2795 7.91122 22.5256 8.55838 22.5256 9.33315C22.5256 10.1079 22.2795 10.746 21.7873 11.2473C21.286 11.7486 20.648 12.0038 19.8641 12.0038C19.0802 12.0038 18.4422 11.7486 17.9408 11.2473ZM30.8111 14.2643C32.6615 14.2643 33.9011 13.5351 34.3751 12.4322H34.5756V12.5963C34.5756 13.207 34.4936 13.6719 34.3204 14H38.1395C37.9937 13.6172 37.8934 13.1523 37.8479 12.6145C37.7932 12.0767 37.7658 11.2929 37.7658 10.2811V7.99326C37.7658 6.89035 37.3192 6.01532 36.6447 5.48665C36.3074 5.22232 35.8973 5.01267 35.4142 4.83949C34.448 4.51135 33.4727 4.40197 32.2969 4.40197C31.6041 4.40197 30.8294 4.47489 29.9817 4.61162C29.1249 4.75746 28.4868 4.90329 28.0675 5.05825V7.24583C28.3683 6.99973 28.8514 6.78097 29.5077 6.59867C30.164 6.41637 30.8567 6.32522 31.5768 6.32522C32.4883 6.32522 33.2175 6.51664 33.7644 6.89947C34.3021 7.29141 34.5756 7.86565 34.5756 8.64042V9.70687H34.3386C34.1016 9.1782 33.6823 8.74068 33.0716 8.40343C32.4609 8.06618 31.7135 7.89299 30.8111 7.89299C29.5988 7.89299 28.6509 8.19379 27.9673 8.78626C27.2836 9.37873 26.9464 10.1444 26.9464 11.065C26.9464 11.9856 27.2836 12.7513 27.9673 13.3528C28.6509 13.9635 29.5988 14.2643 30.8111 14.2643ZM32.2786 12.4322C30.9387 12.4322 30.1366 11.8489 30.1366 11.0103C30.1366 10.1808 30.9387 9.61572 32.2786 9.61572C32.944 9.61572 33.4909 9.75244 33.9102 10.035C34.3295 10.3176 34.5391 10.6457 34.5391 11.0103C34.5391 11.8853 33.6732 12.4322 32.2786 12.4322ZM43.9822 14.2643C44.9484 14.2643 45.7596 14.0273 46.425 13.5443C47.0904 13.0703 47.5735 12.4505 47.8834 11.6848H48.1022V12.0767C48.1022 12.7239 47.9928 13.3711 47.774 14H51.8393C51.6023 12.9518 51.4838 11.6392 51.4838 10.0806V4.84861C51.4838 3.28995 51.6023 1.9774 51.8393 0.929183H47.774C47.9928 2.05032 48.1022 3.35376 48.1022 4.84861V7.01796H47.9016C47.6008 6.22496 47.1177 5.58691 46.4341 5.11294C45.7505 4.63896 44.921 4.40197 43.9457 4.40197C42.5512 4.40197 41.3844 4.94887 40.6644 5.84213C39.9352 6.7354 39.5341 7.9568 39.5341 9.33315C39.5341 10.2538 39.6982 11.0832 40.0354 11.8215C40.3636 12.5598 40.8649 13.1432 41.5485 13.5898C42.2321 14.0456 43.0434 14.2643 43.9822 14.2643ZM45.4132 11.9674C44.602 11.9674 43.9457 11.7213 43.4444 11.2291C42.9431 10.7369 42.6879 10.1079 42.6879 9.33315C42.6879 8.57661 42.9431 7.94768 43.4444 7.45548C43.9457 6.96327 44.602 6.71717 45.4132 6.71717C46.188 6.71717 46.8169 6.96327 47.3092 7.46459C47.8014 7.96591 48.0475 8.58573 48.0475 9.33315C48.0475 10.035 47.8014 10.6457 47.3 11.1744C46.7987 11.703 46.1698 11.9674 45.4132 11.9674ZM58.0921 14C57.9736 13.681 57.8916 13.1888 57.8278 12.5234C57.764 11.858 57.7366 11.2564 57.7366 10.7186V9.33315C57.7366 8.6313 57.9554 8.02972 58.3929 7.5284C58.8304 7.02707 59.4138 6.77186 60.1521 6.77186C61.5376 6.77186 62.203 7.71069 62.203 9.20554V10.673C62.203 12.1132 62.13 13.2252 61.9751 14H65.931C65.7031 12.97 65.5846 11.8215 65.5846 10.5454V9.26023C65.5937 8.61307 65.8307 8.02972 66.2773 7.5284C66.724 7.02707 67.2891 6.77186 67.9727 6.77186C69.3673 6.77186 70.0418 7.71069 70.0418 9.20554V10.673C70.0418 11.8398 69.9233 12.9518 69.6863 14H73.7607C73.5328 13.0065 73.4234 11.7851 73.4234 10.3449V8.62219C73.4234 5.96063 72.1565 4.40197 69.5223 4.40197C67.5808 4.40197 66.168 5.37727 65.539 7.01796H65.3567C64.8554 5.27701 63.6431 4.40197 61.7016 4.40197C59.8695 4.40197 58.6208 5.27701 57.9463 7.01796H57.7366V6.64425C57.7366 5.85125 57.8734 5.18586 58.1468 4.66631H54.0269C54.2547 5.65983 54.3641 6.81743 54.3641 8.1391V10.8645C54.3641 11.9583 54.2547 13.0065 54.0269 14H58.0921ZM79.2843 14.2643C81.1347 14.2643 82.3743 13.5351 82.8483 12.4322H83.0488V12.5963C83.0488 13.207 82.9668 13.6719 82.7936 14H86.6128C86.4669 13.6172 86.3667 13.1523 86.3211 12.6145C86.2664 12.0767 86.239 11.2929 86.239 10.2811V7.99326C86.239 6.89035 85.7924 6.01532 85.1179 5.48665C84.7807 5.22232 84.3705 5.01267 83.8874 4.83949C82.9212 4.51135 81.9459 4.40197 80.7701 4.40197C80.0773 4.40197 79.3026 4.47489 78.4549 4.61162C77.5981 4.75746 76.96 4.90329 76.5408 5.05825V7.24583C76.8415 6.99973 77.3246 6.78097 77.9809 6.59867C78.6372 6.41637 79.3299 6.32522 80.05 6.32522C80.9615 6.32522 81.6907 6.51664 82.2376 6.89947C82.7754 7.29141 83.0488 7.86565 83.0488 8.64042V9.70687H82.8118C82.5748 9.1782 82.1556 8.74068 81.5449 8.40343C80.9342 8.06618 80.1867 7.89299 79.2843 7.89299C78.0721 7.89299 77.1241 8.19379 76.4405 8.78626C75.7569 9.37873 75.4196 10.1444 75.4196 11.065C75.4196 11.9856 75.7569 12.7513 76.4405 13.3528C77.1241 13.9635 78.0721 14.2643 79.2843 14.2643ZM80.7519 12.4322C79.412 12.4322 78.6098 11.8489 78.6098 11.0103C78.6098 10.1808 79.412 9.61572 80.7519 9.61572C81.4172 9.61572 81.9641 9.75244 82.3834 10.035C82.8027 10.3176 83.0124 10.6457 83.0124 11.0103C83.0124 11.8853 82.1464 12.4322 80.7519 12.4322ZM92.656 17.7371C92.419 16.5248 92.3005 15.2214 92.3005 13.8177V11.6666H92.5284C92.8291 12.4596 93.3122 13.0885 93.9867 13.5534C94.6521 14.0273 95.4725 14.2643 96.4478 14.2643C97.8697 14.2643 99.0364 13.7174 99.7656 12.8242C100.495 11.9309 100.887 10.7186 100.887 9.33315C100.887 7.9568 100.495 6.7354 99.7656 5.84213C99.0364 4.94887 97.8697 4.40197 96.4478 4.40197C95.4816 4.40197 94.6612 4.63896 93.9959 5.12205C93.3305 5.60514 92.8474 6.23408 92.5466 6.99973H92.3005V6.60779C92.3005 6.01532 92.419 5.36816 92.656 4.66631H88.5907C88.8186 5.65983 88.928 6.97239 88.928 8.58573V13.8177C88.928 15.431 88.8186 16.7436 88.5907 17.7371H92.656ZM95.0076 11.9674C94.242 11.9674 93.613 11.703 93.1117 11.1744C92.6104 10.6457 92.3643 10.035 92.3643 9.33315C92.3643 8.58573 92.6104 7.96591 93.1026 7.46459C93.5857 6.96327 94.2237 6.71717 95.0076 6.71717C95.8097 6.71717 96.466 6.96327 96.9673 7.44636C97.4686 7.93857 97.7148 8.5675 97.7148 9.33315C97.7148 10.1079 97.4686 10.7369 96.9673 11.2291C96.466 11.7213 95.8188 11.9674 95.0076 11.9674Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                </SmoothLink>

                <SmoothLink to="connectScroll" smooth={true}>
                  <li class="nav-item mx-3 my-3 current">
                    <a href="/" className="button" id="aa">
                      <svg
                        width="83"
                        height="15"
                        viewBox="0 0 83 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.12141 14.2643C9.17874 14.2643 10.1176 14.1823 10.947 14.0182C11.7674 13.8542 12.5695 13.6081 13.3625 13.289V9.35138C12.8247 9.81624 12.1502 10.1991 11.3572 10.4816C10.5551 10.7733 9.69829 10.9192 8.79591 10.9192C7.92088 10.9192 7.13699 10.7915 6.44426 10.5454C5.74241 10.2993 5.17728 9.91651 4.74888 9.38784C4.31136 8.86829 4.09261 8.23936 4.09261 7.50105C4.09261 6.45283 4.53012 5.60514 5.40516 4.9671C6.28019 4.32905 7.40133 4.01003 8.77768 4.01003C9.48865 4.01003 10.1814 4.1103 10.865 4.31994C11.5486 4.52958 12.1137 4.80303 12.5786 5.13117L12.6333 1.49431C12.0864 1.24821 11.421 1.05679 10.628 0.901838C9.83501 0.746884 9.00556 0.673965 8.15787 0.673965C6.58098 0.673965 5.08613 1.02945 3.80093 1.78599C3.15377 2.1597 2.59776 2.61545 2.12378 3.14411C1.16671 4.21056 0.574241 5.75098 0.574241 7.50105C0.574241 12.0038 4.23844 14.2643 8.12141 14.2643ZM22.8694 13.8724C24.3551 13.362 25.2939 12.4505 25.8044 11.2564C26.0505 10.6639 26.1781 10.0168 26.1781 9.33315C26.1781 8.64953 26.0505 8.00237 25.8044 7.4099C25.2939 6.22496 24.3642 5.30435 22.8694 4.7848C22.1219 4.52958 21.2834 4.40197 20.3536 4.40197C19.4239 4.40197 18.5854 4.52958 17.8379 4.7848C16.3431 5.30435 15.4134 6.22496 14.912 7.4099C14.6568 8.00237 14.5292 8.64953 14.5292 9.33315C14.5292 10.0168 14.6568 10.6548 14.912 11.2473C15.4134 12.4322 16.3431 13.362 17.8379 13.8724C18.5854 14.1367 19.4239 14.2643 20.3536 14.2643C21.2834 14.2643 22.1219 14.1367 22.8694 13.8724ZM18.4304 11.2473C17.9291 10.746 17.683 10.1079 17.683 9.33315C17.683 8.55838 17.9291 7.91122 18.4304 7.4099C18.9317 6.90858 19.5698 6.66248 20.3536 6.66248C21.1375 6.66248 21.7756 6.90858 22.2769 7.4099C22.7691 7.91122 23.0152 8.55838 23.0152 9.33315C23.0152 10.1079 22.7691 10.746 22.2769 11.2473C21.7756 11.7486 21.1375 12.0038 20.3536 12.0038C19.5698 12.0038 18.9317 11.7486 18.4304 11.2473ZM31.9661 14C31.8476 13.681 31.7655 13.1888 31.7017 12.5234C31.6379 11.858 31.6106 11.2564 31.6106 10.7186V9.33315C31.6106 8.64953 31.8567 8.05706 32.3398 7.53751C32.8229 7.02707 33.4336 6.77186 34.1719 6.77186C35.6212 6.77186 36.4689 7.70158 36.4689 9.20554V10.673C36.4689 11.8398 36.3504 12.9518 36.1134 14H40.1786C39.9599 13.0247 39.8505 11.8124 39.8505 10.3449V8.62219C39.8505 7.30052 39.4859 6.27054 38.7567 5.52311C38.0184 4.77569 36.9884 4.40197 35.6485 4.40197C33.7708 4.40197 32.4947 5.27701 31.8202 7.01796H31.6106V6.64425C31.6106 5.85125 31.7473 5.18586 32.0208 4.66631H27.9008C28.1287 5.65983 28.2381 6.81743 28.2381 8.1391V10.8645C28.2381 11.9583 28.1287 13.0065 27.9008 14H31.9661ZM47.188 14.2643C47.981 14.2643 48.8652 14.0456 49.3847 13.7539V11.1106C49.0839 11.3567 48.5006 11.539 47.9081 11.539C46.714 11.539 45.994 10.9009 45.994 9.61572V6.10647H49.2936V4.66631H45.994V0.929183L42.8311 1.77687V4.66631H40.9534V6.10647H42.8311V10.7915C42.8311 13.4258 44.7726 14.2643 47.188 14.2643ZM54.2339 14.2643C56.0842 14.2643 57.3238 13.5351 57.7978 12.4322H57.9983V12.5963C57.9983 13.207 57.9163 13.6719 57.7431 14H61.5623C61.4164 13.6172 61.3162 13.1523 61.2706 12.6145C61.2159 12.0767 61.1886 11.2929 61.1886 10.2811V7.99326C61.1886 6.89035 60.7419 6.01532 60.0674 5.48665C59.7302 5.22232 59.32 5.01267 58.8369 4.83949C57.8707 4.51135 56.8954 4.40197 55.7196 4.40197C55.0269 4.40197 54.2521 4.47489 53.4044 4.61162C52.5476 4.75746 51.9096 4.90329 51.4903 5.05825V7.24583C51.7911 6.99973 52.2742 6.78097 52.9304 6.59867C53.5867 6.41637 54.2794 6.32522 54.9995 6.32522C55.911 6.32522 56.6402 6.51664 57.1871 6.89947C57.7249 7.29141 57.9983 7.86565 57.9983 8.64042V9.70687H57.7613C57.5244 9.1782 57.1051 8.74068 56.4944 8.40343C55.8837 8.06618 55.1362 7.89299 54.2339 7.89299C53.0216 7.89299 52.0736 8.19379 51.39 8.78626C50.7064 9.37873 50.3691 10.1444 50.3691 11.065C50.3691 11.9856 50.7064 12.7513 51.39 13.3528C52.0736 13.9635 53.0216 14.2643 54.2339 14.2643ZM55.7014 12.4322C54.3615 12.4322 53.5594 11.8489 53.5594 11.0103C53.5594 10.1808 54.3615 9.61572 55.7014 9.61572C56.3668 9.61572 56.9137 9.75244 57.3329 10.035C57.7522 10.3176 57.9619 10.6457 57.9619 11.0103C57.9619 11.8853 57.096 12.4322 55.7014 12.4322ZM69.2917 14.2643C69.9207 14.2643 70.6316 14.2096 71.4155 14.0911C72.1994 13.9635 72.801 13.8268 73.2112 13.6627V11.0285C72.7919 11.2929 72.2814 11.5116 71.689 11.6757C71.0874 11.8489 70.5131 11.9309 69.9571 11.9309C68.8178 11.9309 67.9154 11.6939 67.2591 11.2291C66.5937 10.7642 66.2656 10.1262 66.2656 9.33315C66.2656 8.54015 66.5846 7.91122 67.2226 7.44636C67.8607 6.9815 68.7084 6.75363 69.7566 6.75363C70.3126 6.75363 70.8595 6.82655 71.4064 6.97239C71.9533 7.12734 72.3817 7.30964 72.7007 7.51928L72.8557 5.00356C72.482 4.83038 71.926 4.69365 71.1876 4.57516C70.4493 4.45666 69.8295 4.40197 69.3282 4.40197C67.2409 4.40197 65.582 4.93975 64.5793 5.84213C63.5767 6.75363 63.0571 7.94768 63.0571 9.33315C63.0571 10.7186 63.5676 11.9127 64.5611 12.8151C65.5455 13.7266 67.2044 14.2643 69.2917 14.2643ZM80.2023 14.2643C80.9953 14.2643 81.8795 14.0456 82.399 13.7539V11.1106C82.0982 11.3567 81.5149 11.539 80.9224 11.539C79.7283 11.539 79.0083 10.9009 79.0083 9.61572V6.10647H82.3079V4.66631H79.0083V0.929183L75.8454 1.77687V4.66631H73.9677V6.10647H75.8454V10.7915C75.8454 13.4258 77.7869 14.2643 80.2023 14.2643Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </li>
                </SmoothLink>
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
                <img src={designer} className=" img-fluid aniDesigner" alt="d"></img>
              </div>
              <div className="row mt-lg-5">
                <img src={developer} className=" img-fluid aniDeveloper" alt="d"></img>
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

            <div className="col-2" id="col2" style={{ marginRight: "-4rem" }}>
              <img
                src={manager}
                className="mb-5 pb-5 img-fluid aniManager"
                alt="d"
                style={{ marginTop: "8rem" }}
              ></img>
            </div>
          </div>
        </div>
        <div
          className="showOnMobile"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={herosectionMobile}
            alt="HeroSection"
            className="hero-section-mobile"
          />
        </div>
        <StickerWall />
        <div className="container my-5" name="roadMapScroll">
          <div className="d-flex justify-content-around mb-lg-5">
            {domain.map((field) => {
              return (
                <div
                  className={active === field ? `${field}-active` : `${field}`}
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

        <Enough />
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
  );
}

export default Landing1;
