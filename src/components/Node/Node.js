import React, { useState } from "react";

import "./Node.css";

const Node = ({ col, row, buttonTypeActive, isMouseDown }) => {
  const [nodeType, setNodeType] = useState("empty");

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
