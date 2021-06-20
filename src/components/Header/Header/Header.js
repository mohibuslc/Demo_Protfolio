import React from "react";
import HeaderBody from "../HeaderBody/HeaderBody";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="m-0 w-100">
        {/* <HeaderMessage></HeaderMessage> */}
        <HeaderBody></HeaderBody>
      </div>
    </div>
  );
};

export default Header;
