import React from "react";

import wLogo from "../../assets/logo-white.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import yt from "../../assets/yt.png";
import "./style.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="container ">
        <div className="row bt">
          <div className="col-lg-3 col-sm-12">
            <div className="footer-1-tagline">
              <img src={wLogo} alt="white logo" />
              <p>mail@jennyhouse.id</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="footer-2-tagline">
              <h1>About</h1>
              <ul>
                <li>
                  <p>About Us</p>
                </li>
                <li>
                  <p>Contact Us</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="footer-2-tagline">
              <h1>Product</h1>
              <ul>
                <li>
                  <p>Hair Care</p>
                </li>
                <li>
                  <p>Hair Color</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="footer-3-tagline">
              <h1>Sosial Media</h1>
              <img src={fb} alt="fb logo" />
              <img src={ig} alt="ig logo" />
              <img src={yt} alt="yt logo" />
            </div>
          </div>
        </div>
        <div className="footer-tagline my-4">
          <div className="row">
            <div className="col-lg-8 copyright">
              <p>2023-Jennyhouse</p>
            </div>
            <div className="col-lg-2">
              <p>Privacy Policy</p>
            </div>
            <div className="col-lg-2">
              <p>Terms of Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
