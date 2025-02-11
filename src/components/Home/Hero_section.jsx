import React from "react";

const Hero_section = () => {
  return (
    <>
      <div className="hero-main">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <h1>Mystery & Wonder</h1>
              <p>
                Experience Breathtaking Performances That   <br /> Leave You Questioning
                What’s Possible.
              </p>
              <p className="second-p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when <br /> looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal <br /> distribution of letters,
              </p>
            </div>
            <div className="hero-btn">
                <a href="#">Book shows</a>
                <a href="#" className="second-btn">Watch Demo</a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_section;
