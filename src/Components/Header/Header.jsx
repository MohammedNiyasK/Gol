import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import HeaderTemplate from "../UI/HeaderTemplate/HeaderTemplate";
import logo from "../../assets/gol-logo 1.png";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const menuHandler = (event) => {
    setIsClicked(true);
  };
  const onClickHandler = () => {
    setIsClicked(false);
  };
  return (
    <Fragment>
      {isClicked && <Sidebar clickHandler={onClickHandler} />}
      <div className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <i className={`${classes.menu} bx bx-menu`} onClick={menuHandler}></i>
        <nav className={classes.navigation}>
          <ul>
            <li>Find Reservations</li>
            <div className={classes.icon}>
              <Link
                to="/package"
                style={{ textDecoration: "none", color: "#3A3A3A" }}
              >
                <li>Packages</li>
              </Link>
              <i className="bx bx-chevron-down"></i>
            </div>
            <div className={classes.icon}>
              <li>About Lakshadweep</li>
              <i className="bx bx-chevron-down"></i>
            </div>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "#3A3A3A" }}
            >
              <li>About Us</li>
            </Link>
            <li>Gol</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className={classes.header_right}>
          <button className={classes.login}>Login</button>
          <button className={classes.signUp}>Sign Up</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
