import React from "react";
import Banner from "./Banner/Banner";
import Doctors from "./Doctors/Doctors";
import Feature from "./Feature/Feature";
import "./Home.css";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Feature></Feature>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
