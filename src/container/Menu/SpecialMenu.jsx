import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="Menu">
    <div className="app__specialMenu-title ">
      <SubHeading title="Menu Tha Fits you Palatte" />
      <h1 className=" headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_cola flex__center">
        <p className="app__specialMenu-menu_heading">Cola</p>
        <div className="app__specialMenu_menu_items">
          {data.cola.map((cola, index) => (
            <MenuItem
              key={cola.title + index}
              title={cola.title}
              price={cola.price}
              tags={cola.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu-menu_heading">cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktails, index) => (
            <MenuItem
              key={cocktails.title + index}
              title={cocktails.title}
              price={cocktails.price}
              tags={cocktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className=" custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
