import React from "react";

const About_main = () => {
  return (
    <>
      <div className="about-main">
        <div className="container">
          <div className="about-inner">
            <div className="about-content">
              <p className="first-p">ABOUT</p>
              <h2>The allure of magic <br /> has always <span> enchanted people</span></h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                debitis mollitia repudiandae unde. Magnam excepturi ullam
                tempore nobis. Possimus provident incidunt modi, cum itaque
                soluta voluptatum.
              </p>
              <p>
                pariatur non iste reprehenderit nam. Nesciunt mollitia
                consequatur delectus eveniet. Eos quisquam, quibusdam voluptatem
                explicabo architecto.
              </p>
              <ul>
                <li>
                  <span>1.</span>best magic experience
                </li>
                <li>
                  <span>2.</span>Magic Surprising & Stunning.{" "}
                </li>
                <li>
                  <span>3.</span>Our Experience Team.{" "}
                </li>
              </ul>
              <a href="#">Read More</a>
            </div>
            <div className="about-img">
                <div className="left-img">
                    <img src="/magic-react/assets/images/abt3.png" alt="abt3.png" />
                </div>
                <div className="right-img">
                    <img src="/magic-react/assets/images/abt2.png" alt="abt2.png" />
                    <img src="/magic-react/assets/images/abt1.png" alt="abt1.png" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About_main;
