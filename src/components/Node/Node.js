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
  setMouseDownStartOrFinish,
}) => {
  const nodeClass = isWall
    ? "wall"
    : isStart
    ? "start"
    : isFinish
    ? "finish"
    : null;

  const handleMouseEnter = () => {
    if (mouseDown) {
      if (isStart || isFinish) {
        return;
      } else {
        updateWithWalls(col, row, isWall);
      }
    }
  };
  const handleMouseDown = () => {
    if (isStart || isFinish) {
      setMouseDownStartOrFinish(true);
    } else {
      updateWithWalls(col, row, isWall);
    }
  };

  return (
    <td
      onMouseDown={() => handleMouseDown()}
      onMouseEnter={() => handleMouseEnter()}
      className={`node ${row}-${col} ${nodeClass}`}
    ></td>
  );
};

export default Node;
