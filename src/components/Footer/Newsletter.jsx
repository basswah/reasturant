import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__Newsletter">
    <div className=" app__Newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className=" headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className=" p__opensans">And Never Miss lastest Updates!</p>
    </div>
    <div className=" app__Newsletter-input flex__center">
      <input type="email" placeholder="Enter Your Email Address" />
      <button className=" custom__button">subscribe</button>
    </div>
  </div>
);

export default Newsletter;
