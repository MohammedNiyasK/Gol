import React, { Fragment } from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = ({ clickHandler }) => {
  const closeSidebar = () => {
    clickHandler();
  };
  return (
    <Fragment>
      <div className={classes.list}>
        <i
          className={`${classes.icon} bx bx-window-close`}
          onClick={closeSidebar}
        ></i>
        <ul>
          <li>Find Reservations</li>
          <Link
            to="/package"
            style={{ textDecoration: "none", color: "#3A3A3A" }}
          >
            <li>Packages</li>
          </Link>
          <li>About Lakshadweep</li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#3A3A3A" }}
          >
            <li>About Us</li>
          </Link>
          <li>Gol</li>
          <li>Support</li>
        </ul>
        <div className={classes.button}>
          <button className={classes.btn}>Login</button>
          <button className={classes.btn}>Sign Up</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
