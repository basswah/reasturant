import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className=" app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className=" app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className=" headtext__cormorant"> What we Belive In </h1>
      <div className=" app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className=" p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className=" p__opensans ">
          Accusantium maxime quisquam deserunt magni excepturi aperiam voluptas
          cupiditate temporibus, molestiae soluta suscipit omnis nemo eos minima
          eius iste? Harum, sapiente eveniet.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin luo </p>
        <p className=" p__opensans">Chef &Founder </p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
