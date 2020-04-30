import React from "react";

const MenuButton = ({ type, handleClick }) => {
  return (
    <button onClick={handleClick} type="button">
      {type}
    </button>
  );
};

export default MenuButton;
