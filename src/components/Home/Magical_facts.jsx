import React from "react";

const Magical_facts = () => {
  return (
    <>
      <div className="magical-fact-main">
        <div className="container">
          <div className="magical-fact-inner">
            <div className="magical-col-1">
              <p className="p-title">magical fun facts</p>
              <h2>
                Discover some <br /> fascinating facts from <br /> the world of
                magic!
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                will be distracted by the readable content of a page when
                looking at its layout.
              </p>
            </div>
            <div className="magical-col-2">
              <div className="show-info">
                <div className="show-info-col">
                  <div className="show-info-box">
                    <div className="outer-img">
                      <div className="show-info-img">
                        <img src="/react-magic/assets/images/cap.png" alt="cap.png" />
                      </div>
                    </div>
                    <div className="show-info-content">
                      <h3>100+</h3>
                      <p>shows done</p>
                    </div>
                  </div>
                  <div className="show-info-box">
                    <div className="outer-img">
                      <div className="show-info-img">
                        <img src="/react-magic/assets/images/board.png" alt="board.png" />
                      </div>
                    </div>
                    <div className="show-info-content">
                      <h3>80+</h3>
                      <p>shows done</p>
                    </div>
                  </div>
                </div>
                <div className="show-info-col right">
                  <div className="show-info-box">
                    <div className="outer-img">
                      <div className="show-info-img">
                        <img src="/react-magic/assets/images/stick.png" alt="stick.png" />
                      </div>
                    </div>
                    <div className="show-info-content">
                      <h3>50+</h3>
                      <p>shows done</p>
                    </div>
                  </div>
                  <div className="show-info-box">
                    <div className="outer-img">
                      <div className="show-info-img">
                        <img src="/react-magic/assets/images/cup.png" alt="cup.png" />
                      </div>
                    </div>
                    <div className="show-info-content">
                      <h3>70+</h3>
                      <p>shows done</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magical_facts;
