import React, { Fragment } from "react";
import Banner from "../Banner/Banner";
import FlightBooking from "../Booking/FlightBooking";
import PackageHeading from "../PackageHeading/PackageHeading";
import PackageType from "../PackageType/PackageType";
import CardContainer from "../Card/CardContainer";
import Footer from "../Footer/Footer";


const HomePage = () => {
  return (
    <Fragment>
      <Banner />
      <FlightBooking />
      <PackageHeading />
      <PackageType />
      <CardContainer />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
