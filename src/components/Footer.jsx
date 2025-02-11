import React from "react";

const Footer = () => {
  return (
    <>
      <div className="newslatter">
        <div className="container">
          <div className="newslatter-inner">
            <div className="newslatter-content">
              <h3>
                Subscribe our newsletter <br /> for latest updates
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                nam <br /> magni provident sapiente voluptate debitis
                perferendis modi error, <br /> a deleniti consectetur.
              </p>
            </div>
            <div className="newslatter-email">
              <form action="">
                <div className="form-content">
                  <input type="text" placeholder="Enter Your Email" />
                  <button type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">
              <img src="/react-magic/assets/images/logo.png" alt="logo.png" />
            </div>
            <div className="footer-list">
              <div className="footer-col">
                <div className="heading-title">
                  <strong>DOOGEE</strong>
                </div>
                <ul className="link-desc">
                  <li>
                    <a href="">Teardown</a>
                  </li>
                  <li>
                    <a href="">News</a>
                  </li>
                  <li>
                    <a href="">Parters</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                  <li>
                    <a href="">Terms of Use</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <div className="heading-title">
                  <strong>Social</strong>
                </div>
                <ul className="link-desc">
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">Twitter</a>
                  </li>
                  <li>
                    <a href="">YouTube</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <div className="heading-title">
                  <strong>Service</strong>
                </div>
                <ul className="link-desc">
                  <li>
                    <a href="">Compare</a>
                  </li>
                  <li>
                    <a href="">Download</a>
                  </li>
                  <li>
                    <a href="">Feedback</a>
                  </li>
                  <li>
                    <a href="">Bug Support</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <div className="heading-title">
                  <strong>Activity</strong>
                </div>
                <ul className="link-desc">
                  <li>
                    <a href="">Influencers</a>
                  </li>
                  <li>
                    <a href="">Co-Branding</a>
                  </li>
                  <li>
                    <a href="">Honor</a>
                  </li>
                  <li>
                    <a href="">Giveaway us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-icons">
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
      <div className="footer-copy">
        <div className="container">
            <div className="footer-copy-inner">
                <div className="copy-content">
                    <p>© 2024 magical mirage all rights reserved</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
