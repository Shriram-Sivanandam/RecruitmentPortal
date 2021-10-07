import React from "react";
import profile_pic from "../../assets/undraw_profile_pic_ic5t.svg";
import "./Nav2.css";
function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark "
        id="nav"
        style={{ backgroundColor: "#0a0a4b" }}
      >
        <a className="navbar-brand ml-lg-5 pl-lg-5 ml-xs-0 pl-xs-0" href="/">
          <h3 className="logo_text">
            <b>EASY</b>RECRUIT
          </h3>
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
                  <span class="ml-2 d-none d-lg-inline small profiletext">
                    Preetish Biswal
                  </span>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <div class="dropdown-item"></div>
                  <a
                    class="dropdown-item"
                    href=" "
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
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
