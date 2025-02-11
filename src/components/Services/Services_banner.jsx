import React from "react";
import { Link } from "react-router-dom";

const Services_banner = () => {
  return (
    <>
      <div className="service-banner-main">
        <div className="container">
          <div className="service-banner-inner">
            <div className="service-banner-content">
              <h1>Services</h1>
              <p>
                <Link to="/">Home</Link>|<span>Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services_banner;
