import React, { useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";

const Leftnavbar = () => {
  return (
    <div className="navbar">
      <GiCommercialAirplane size={30} />
      <nav className="bot-nav">
        <a>Fb</a>
        <a>Tw</a>
        <a>In</a>
        <a>Wp</a>
      </nav>
    </div>
  );
};

export default Leftnavbar;
