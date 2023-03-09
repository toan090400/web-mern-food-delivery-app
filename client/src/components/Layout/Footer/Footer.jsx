import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/res-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-chill">
        <div className="footer-logo">
          <div className="logo-image">
            <img src={logo} alt="logo" loading="lazy" />
            <h5>Tasty Treat</h5>
          </div>
          <div className="logo-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam non
              ratione sapiente mollitia veritatis recusandae explicabo quia,
              assumenda in, dignissimos earum eius sunt, vero cumque
              perspiciatis culpa cupiditate maiores beatae!
            </p>
          </div>
        </div>
        <div className="footer-time">
          <div className="time-text">
            <h5>Delivery Time</h5>
          </div>
          <div className="time-open">
            <span>Sunday - Thursday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="time-off">
            <span>Friday - Saturday</span>
            <p>Off day</p>
          </div>
        </div>
        <div className="footer-contact">
          <div className="contact-text">
            <h5>Contact</h5>
            <p>Location: ZindaBazar, Sylhet-3100, Bangladesh</p>
          </div>
          <div className="contact-phone">
            <span>Phone: 01712345678</span>
          </div>
          <div className="contact-email">
            <span>Email: example@gmail.com</span>
          </div>
        </div>
        <div className="footer-newsletter">
          <div className="newletter-text">
            <h5>Newsletter</h5>
            <p>Subscribe our newsletter</p>
          </div>
          <div className="newletter-submit">
            <div className="form-controll">
              <div className="input">
                <input type="text" placeholder="Enter your email" />
                <div className="image">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-finall">
        <div className="copyright">
          <p>
            Copyright - 2022, website made by Muhibur Rahman. All Rights
            Reserved.
          </p>
        </div>
        <div className="follow">
          <div className="follow-text">
            <p>Follow:</p>
          </div>
          <div className="follow-icon">
            <Link to={`/`}>
              <i className="fa-brands fa-facebook"></i>
            </Link>
          </div>
          <div className="follow-icon">
            <Link to={`/`}>
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
          <div className="follow-icon">
            <Link to={`/`}>
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
          <div className="follow-icon">
            <Link to={`/`}>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
