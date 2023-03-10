import React, { Fragment } from "react";
import HeaderTemplate from "../UI/HeaderTemplate/HeaderTemplate";
import Header from "../Header/Header";
import classes from "./Banner.module.css";
import vector from "../../assets/Vector.png";
import HomeIllustrate from '../../assets/Homeillustration.png'
import HomeMap from '../../assets/HomeMap.png'

const Banner = () => {
  return (
    <HeaderTemplate>
      <Header />
      <div className={classes.banner}>
        <div className={classes.banner_left}>
          <div className={classes.visit}>
            <p>Visit</p>
            <img src={vector} alt="image" />
          </div>
          <div>
            <h1 className={classes.title}>
              The Exotic <br /> <span>Lakshadweep </span><br />
              Islands
            </h1>
          </div>
          <div>
            <button className={classes.btn}>Discover Now</button>
          </div>
        </div>
        <div className={classes.banner_right}>
          <img src={HomeIllustrate} alt="image" />
         
        </div>
      </div>
    </HeaderTemplate>
  );
};

export default Banner;
