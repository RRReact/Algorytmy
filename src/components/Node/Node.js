import React from "react";
import "./Node.css";

const Node = ({
  col,
  row,
  isWall,
  isFinish,
  isStart,
  mouseDown,
  updateWithWalls,
}) => {
  const nodeClass = isWall
    ? "wall"
    : isStart
    ? "start"
    : isFinish
    ? "finish"
    : null;

  const handleMouseEnter = (col, row) => {
    if (mouseDown) {
      updateWithWalls(col, row);
    }
  };
  const handleMouseDown = (col, row) => {
    updateWithWalls(col, row);
  };
  return (
    <td
      onMouseDown={() => handleMouseDown(col, row)}
      onMouseEnter={() => handleMouseEnter(col, row)}
      className={`node ${row}-${col} ${nodeClass}`}
    ></td>
  );
};

export default Node;
