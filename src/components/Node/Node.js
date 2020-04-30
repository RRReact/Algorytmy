import React, { useState, useEffect } from "react";

import "./Node.css";

const Node = ({ col, row, buttonTypeActive }) => {
  const [nodeType, setNodeType] = useState("empty");

  useEffect(
    () => {
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    },
    //eslint-disable-next-line
    [buttonTypeActive]
  );

  let isMouseDown = false;
  function handleMouseDown() {
    isMouseDown = true;
  }
  function handleMouseUp() {
    isMouseDown = false;
  }
  const handleNodeType = () => {
    if (isMouseDown === true) {
      if (buttonTypeActive === "wall") {
        setNodeType("wall");
      }
      if (buttonTypeActive === "eraser") {
        setNodeType("empty");
      }
    }
  };
  return (
    <td
      onMouseMove={handleNodeType}
      className={`node ${row}-${col} ${nodeType}`}
    ></td>
  );
};

export default Node;
