import React, { useState } from "react";
import profile_pic from "../../assets/undraw_profile_pic_ic5t.svg";
import "./Nav2.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import stclogo from "../../assets/Group 45.svg";

function Nav() {
  const { currentUser, logout } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <nav
        className="  navbar navbar-expand-lg navbar-dark  mainNavbar"
        id="nav"
        style={{ backgroundColor: "#FFF5F1" }}
      >
        <a className="navbar-brand ml-lg-5 pl-lg-5 ml-xs-0 pl-xs-0" href="/">
          <img src={stclogo} alt="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <div className="mr-lg-5 pr-lg-5" style={{ display: "flex" }}>
              <li class="nav-item dropdown no-arrow">
                <a
                  class="nav-link dropdown-toggle"
                  href=" "
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    id="profilePic"
                    class="img-profile rounded-circle img-fluid"
                    alt="profile"
                    src={profile_pic}
                  />
                  {/* <span class="ml-2 d-none d-lg-inline small profiletext">
                    {currentUser.email}
                  </span> */}
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <div class="dropdown-item"></div>
                  <button
                    class="dropdown-item"
                    onClick={handleLogout}
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
