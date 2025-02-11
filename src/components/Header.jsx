import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    function hidesidebar(){
        const sidebar = document.getElementById("sidebar");
        sidebar.style.display = "none"
    }
    function showsidebar(){
        const sidebar = document.getElementById("sidebar");
        sidebar.style.display = "block"
    }
  return (
    <>
      <div className="pre-header">
        <div className="container">
          <div className="pre-header-inner">
            <div className="pre-header-left">
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
              <span>210-27 Quadra, Canada</span>
              <span>
                <i class="fa-solid fa-envelope"></i>
              </span>
              <span>info@example.com</span>
            </div>
            <div className="pre-header-right">
              <div className="pre-header-icons">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="header-inner">
            <div className="header-col-1">
              <a href="#">
                <img src="/magic-react/assets/images/logo.png" alt="logo.png" />
              </a>
            </div>
            <div className="header-col-2">
              <ul className="header-menu">
                <li className="hideonmobile">
                  <Link to="/">HOME</Link>
                </li>
                <li className="hideonmobile">
                  <Link to="/components/About">ABOUT</Link>
                </li>
                <li className="hideonmobile">
                  <Link to="/components/Services">SERVICES</Link>
                </li>
                <li className="hideonmobile">
                  <Link to="/components/Shows">SHOWS</Link>
                </li>
                <li className="hideonmobile">
                  <Link to="/components/Contact">CONTACT</Link>
                </li>
                <li onClick={showsidebar} className="sidebar-button">
                  <a href="#">
                    <i class="fa-solid fa-bars"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="header-col-3">
              <div className="header-btn">
                <a href="#">Book Shows</a>
              </div>
            </div>
            <div id="sidebar">
              <ul>
                <li onClick={hidesidebar}>
                  <a href="#">
                    <i class="fa-solid fa-xmark"></i>
                  </a>
                </li>
                <li>
                  <Link to="/" onClick={hidesidebar}>HOME</Link>
                </li>
                <li>
                  <Link to="/components/About" onClick={hidesidebar}>ABOUT</Link>
                </li>
                <li>
                  <Link to="/components/Services" onClick={hidesidebar}>SERVICES</Link>
                </li>
                <li>
                  <Link to="/components/Shows" onClick={hidesidebar}>SHOWS</Link>
                </li>
                <li>
                  <Link to="/components/Contact" onClick={hidesidebar}>CONTACT</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
