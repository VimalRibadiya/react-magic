import React from "react";
import { Link } from "react-router-dom";

const Contact_banner = () => {
  return (
    <>
      <div className="contact-banner-main">
        <div className="container">
          <div className="contact-banner-inner">
            <div className="contact-banner-content">
              <h1>Contact</h1>
              <p>
                <Link to="/">Home</Link>|<span>Contact</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_banner;
