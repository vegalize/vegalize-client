import React from "react";
import Banner from "./Banner/Banner";
import Information from "./Information/Information";
import CallToAction from "./CallToAction/CallToAction";
import Contact from "./Contact/Contact";
import Copyright from "./Copyright/Copyright";

const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <CallToAction />
      <Contact />
      <Copyright />
    </>
  );
};

export default Home;
