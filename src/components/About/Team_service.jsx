import React from "react";

const Team_service = () => {
  return (
    <>
      <div className="team-service-main">
        <div className="container">
          <div className="team-service-inner">
            <div className="team-title">
              <h2>
                Meet Our <span>Experience Team</span>
              </h2>
              <p>
                The magic you witness is only possible because of a passionate
                team of seasoned <br /> performers, creators, and visionaries.
                Each act is designed
              </p>
            </div>
            <div className="team-boxes">
              <div className="team-col">
                <div className="team-box">
                  <div className="team-img">
                    <img
                      src="/magic-react/assets/images/team1.png"
                      alt="team1.png"
                      width={65}
                    />
                  </div>
                  <h2>David Mystico</h2>
                  <h3>illustionist</h3>
                  <p>
                    Known for stunning illusions that leave the audience
                    questioning reality. David's acts are always the highlight
                    of the night.
                  </p>
                </div>
              </div>
              <div className="team-col">
                <div className="team-box">
                  <div className="team-img">
                    <img
                      src="/magic-react/assets/images/team2.png"
                      alt="team2.png"
                      width={65}
                    />
                  </div>
                  <h2>Leo Blaze</h2>
                  <h3>Mentalist</h3>
                  <p>
                    Known for stunning illusions that leave the audience
                    questioning reality. David's acts are always the highlight
                    of the night.
                  </p>
                </div>
              </div>
              <div className="team-col">
                <div className="team-box">
                  <div className="team-img">
                    <img
                      src="/magic-react/assets/images/team3.png"
                      alt="team3.png"
                      width={65}
                    />
                  </div>
                  <h2>Samantha Spark</h2>
                  <h3>Fire Performer</h3>
                  <p>
                    Known for stunning illusions that leave the audience
                    questioning reality. David's acts are always the highlight
                    of the night.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team_service;
