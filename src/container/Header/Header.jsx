import React from "react";
import { SubHeading } from "../../components";
import "./Header.css";
import { images } from "../../constants";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour " />
      <h1 className="app__header-h1">The Key To Find Dining</h1>
      <p className="p__opensans app__wrapper_p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla qui
        consectetur recusandae mollitia sed consequatur unde laudantium est
        maxime, deleniti, fuga cupiditate magni nemo officia praesentium veniam,
        vitae eum!
      </p>
      <button type="button" className="custom__button">
        Explore More
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header" />
    </div>
  </div>
);

export default Header;
