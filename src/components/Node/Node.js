import React, { useState, useEffect } from "react";
import "./Node.css";

const Node = ({
  col,
  row,
  buttonTypeActive,
  isMouseDown,
  typeOfNode,
  getUpdatedNodes,
  updateGrid,
}) => {
  const [nodeType, setNodeType] = useState(typeOfNode);

  //if updateGrid is set to true get node's col, row and nodeType
  useEffect(
    () => {
      if (updateGrid) {
        getUpdatedNodes(col, row, nodeType);
      }
    },
    //eslint-disable-next-line
    [updateGrid]
  );
  const handleNodeType = () => {
    if (isMouseDown === true) {
      if (buttonTypeActive === "wall") {
        setNodeType("wall");
      }
      if (buttonTypeActive === "eraser") {
        setNodeType("unvisited");
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
