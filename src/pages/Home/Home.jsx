import React from "react";
import "./home.css";
// importing Header Component from Componenet folder where all exports of Components folder like Header is defined in index.js file
import { Header, AstronautNavigation } from "../../components";
import { Navbar } from "../../containers";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* Main component */}
      <main id="main-component"></main>
      <AstronautNavigation id="quick-access" />
    </>
  );
};

export default Home;
