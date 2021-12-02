import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <a>Home</a>
        <a>Destinations</a>
        <a>Contact Us</a>
        <a>About Us</a>
      </nav>
      <BiSearchAlt size={25} className="header-srch" />
    </div>
  );
};

export default Header;
