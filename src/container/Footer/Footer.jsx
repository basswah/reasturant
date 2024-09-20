import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className=" app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className=" app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className=" app__footer-headtext">Contact Us</h1>
        <p className=" p__opensans">Damascuse - Syria</p>
        <p className=" p__opensans">+0 000 000 000 000</p>
        <p className=" p__opensans">+0 111 111 111 111</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footerlogo" />
        <p className=" p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className=" spoon__img"
          style={{ marginTop: "15" }}
        />
        <div className=" app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className=" app__footer-headtext">Working Time</h1>
        <p className=" p__opensans">Monday - Friday :</p>
        <p className=" p__opensans">08:00AM - 12:00AM</p>
        <p className=" p__opensans">Saturday - Sunday :</p>
        <p className=" p__opensans">07:00AM - 11:00AM</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className=" p__opensans">2024 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
