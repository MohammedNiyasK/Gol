import React from "react";
import classes from "./HeaderTemplate.module.css";

const HeaderTemplate = (props) => {
  return <div className={classes.background}>{props.children}</div>;
};

export default HeaderTemplate;
