import React from "react";
import startGif from "../../assets/startandfinish.gif";
import wallsGif from "../../assets/walls.gif";
import "./Tutorial.css";

const Tutorial = ({ setToggleTutorial }) => {
  return (
    <div className="tutorial">
      <div className="text">
        <p onClick={() => setToggleTutorial(false)} className="close">
          &#x2716;
        </p>
        <div className="flex-cards">
          <div className="card">
            <img src={startGif} alt="" />
            <p>
              Move start and finish node by pressing left mouse button and
              moving cursor to desired place.
            </p>
          </div>
          <div className="card">
            <img src={wallsGif} alt="" />
            <p>
              Build walls by pressing left mouse button and enter nodes with
              cursor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
