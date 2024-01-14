import React, { useState } from "react";
import profile_pic from "../../assets/undraw_profile_pic_ic5t.svg";
import "./Nav2.css";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import stclogo from "../../assets/Group 45.svg";

function Nav() {
  const { logout } = useAuth();
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="mr-lg-5 pr-lg-5" style={{ display: "flex" }}>
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href=" "
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    id="profilePic"
                    className="img-profile rounded-circle img-fluid"
                    alt="profile"
                    src={profile_pic}
                  />
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <div className="dropdown-item"></div>
                  <button
                    className="dropdown-item"
                    onClick={handleLogout}
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
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
