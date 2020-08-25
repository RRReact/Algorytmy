import React from "react";

import { ReactComponent as MobileSVG } from "../../assets/phone.svg";

import "./MobileLock.css";

const MobileLock = () => {
  return (
    <div className="mobile-lock">
      <MobileSVG />
      <h1>Not suitable for your device</h1>
      <p>only devices with width &ge; 768px</p>
    </div>
  );
};

export default MobileLock;
