import React from "react";
import { Link } from "react-router-dom";

const Shows_banner = () => {
  return (
    <>
      <div className="shows-banner-main">
        <div className="container">
          <div className="shows-banner-inner">
            <div className="shows-banner-content">
              <h1>Shows</h1>
              <p>
                <Link to="/">Home</Link>|<span>Shows</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shows_banner;
