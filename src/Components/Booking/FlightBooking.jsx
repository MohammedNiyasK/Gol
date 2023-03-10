import React, { Fragment } from "react";
import classes from "./FlightBooking.module.css";

const FlightBooking = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <p>Where are you flying? </p>
        <div className={classes.booking}>
          <div className={classes.from}>
            <label htmlFor="from">From - To</label>
            <input type="text" id="from" placeholder="Lahore - karachi" />
          </div>
          <div className={classes.return}>
            <label htmlFor="return">Trip</label>
            <input type="text" id="return" placeholder="Return" />
          </div>
          <div className={classes.depart}>
            <label htmlFor="depart">Depart - Return</label>
            <input
              type="text"
              id="depart"
              placeholder="07 Nov 22 - 13 Nov 22"
            />
          </div>
          <div className={classes.passenger}>
            <label htmlFor="passenger">Passenger - Class</label>
            <input
              type="text"
              id="passenger"
              placeholder="1 Passenger,Economy"
            />
          </div>
          
        </div>
        <div className={classes.footer}>
            <button className={classes.btn1}>Add promo code</button>
            <button className={classes.btn2}>Show Flights</button>
          </div>
      </div>
    </Fragment>
  );
};

export default FlightBooking;
