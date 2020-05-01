import React from "react";
import MenuButton from "../MenuButton/MenuButton";

import "./Menu.css";

const Menu = ({ setButtonTypeActive, setUpdateGrid }) => {
  const buttons = [
    { type: "wall" },
    { type: "eraser" },
    { type: "start node" },
    { type: "finish node" },
  ];

  const handleClick = (type) => {
    setButtonTypeActive(type);
  };
  return (
    <form className="menu">
      {buttons.map((button) => {
        const { type } = button;
        return (
          <MenuButton
            key={type}
            handleClick={() => handleClick(type)}
            type={type}
          />
        );
      })}
      <button onClick={() => setUpdateGrid(true)} type="button">
        Start
      </button>
    </form>
  );
};

export default Menu;
