import React from "react";

const Contact_us = () => {
  return (
    <>
      <div className="contact-us-main">
        <div className="container">
          <div className="contact-us-inner">
            <div className="contact-us-title">
              <p>contact us</p>
              <h2>
                Got a question? We’re here to answer! If <br /> you don’t see
                your question here.
              </h2>
            </div>
            <div className="contact-boxes">
              <div className="contact-col">
                <div className="contact-box">
                  <div className="contact-img-center">
                    <div className="contact-img-outer">
                      <div className="contact-img-inner">
                        <img src="/magic-react/assets/images/cap.png" alt="cap.png" />
                      </div>
                    </div>
                  </div>
                  <h2>office address</h2>
                  <p>25/B Milford, New York, USA</p>
                </div>
              </div>
              <div className="contact-col">
                <div className="contact-box">
                  <div className="contact-img-center">
                    <div className="contact-img-outer">
                      <div className="contact-img-inner">
                        <img src="/magic-react/assets/images/cap.png" alt="cap.png" />
                      </div>
                    </div>
                  </div>
                  <h2>call us</h2>
                  <p>000-12345-678</p>
                </div>
              </div>
              <div className="contact-col">
                <div className="contact-box">
                  <div className="contact-img-center">
                    <div className="contact-img-outer">
                      <div className="contact-img-inner">
                        <img src="/magic-react/assets/images/cap.png" alt="cap.png" />
                      </div>
                    </div>
                  </div>
                  <h2>email us</h2>
                  <p>info@gmail.com</p>
                </div>
              </div>
              <div className="contact-col">
                <div className="contact-box">
                  <div className="contact-img-center">
                    <div className="contact-img-outer">
                      <div className="contact-img-inner">
                        <img src="/magic-react/assets/images/cap.png" alt="cap.png" />
                      </div>
                    </div>
                  </div>
                  <h2>open time</h2>
                  <p>Mon-Sat (10:00 to 05:30)</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="contact-img">
                <img src="/magic-react/assets/images/contact.png" alt="contact.png" />
              </div>
              <div className="contact-details">
                <h4>get in touch</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate iusto dolor magni voluptas. Libero dolore deserunt
                  corrupti expedita necessitatibus
                </p>
                <form>
                    <div className="form-group">
                        <div className="form-col">
                            <label>Name</label><br />
                            <input type="text" placeholder="Enter Your Name"/>
                        </div>
                        <div className="form-col">
                            <label>Email</label><br />
                            <input type="text" placeholder="Enter Your Email"/>
                        </div>
                        <div className="form-col">
                            <label>Phone</label><br />
                            <input type="text" placeholder="Enter Your Phone"/>
                        </div>
                        <div className="form-col">
                            <label>Subject</label><br />
                            <input type="text" placeholder="Enter Your Subject"/>
                        </div>
                        <div className="form-last-col">
                            <label>Message</label><br />
                            <textarea placeholder="Enter Your Message" rows={4} style={{width:"90%"}} />
                        </div>
                        <button type="button">Submit</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_us;
