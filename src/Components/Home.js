import React from "react";
import Header from "../Components/Header";
import Leftnavbar from "../Components/leftnavbar";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <Leftnavbar />
        <Header />
        <div className="home-ctn">
          <h1 className="home-header">Never stop exploring</h1>
          <p>Check our Best promotions</p>
          <a className="home-btn">Start Experience</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
