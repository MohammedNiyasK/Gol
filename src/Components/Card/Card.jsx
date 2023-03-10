import React, { Fragment } from "react";
import classes from "./Card.module.css";


const Card = ({image}) => {
  return (
    <div className={classes.card}>
      <div className={classes.price}>
        <p>₹ 500</p>
      </div>
      <div className={classes.image}>
        <img src={image} alt="image" />
      </div>

      <div className={classes.content}>
        <div className={classes.content_left}>
          <div className={classes.content_inner}>
            <i className="bx bx-location-plus"></i>
            <p>Indonesia</p>
          </div>
          <p className={classes.content_desc}>
            Explore the Beauty of the island for 3 days and 2 nights with our
            travel agency...
          </p>
        </div>
        <div className={classes.content_right}>
          <i className={`${classes.star} bx bxs-star`}></i>
          <p>4.5</p>
        </div>
      </div>
      <div className={classes.btn}>
      <button>Book Now</button>
      </div>
      
    </div>
  );
};

export default Card;
