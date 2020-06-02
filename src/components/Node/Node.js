import React from "react";
import "./Node.css";

const Node = ({
  col,
  row,
  isWall,
  isFinish,
  isStart,
  mouseDown,
  mouseDownOnFinish,
  mouseDownOnStart,
  updateWithWalls,
  updateStartOrFinish,
  setmouseDownOnFinish,
  setmouseDownOnStart,
  setMouseDown,
}) => {
  const nodeClass = isWall
    ? "wall"
    : isStart
    ? "start"
    : isFinish
    ? "finish"
    : null;

  const handleMouseEnter = () => {
    if (mouseDownOnStart || mouseDownOnFinish) {
      updateStartOrFinish(col, row);
    }
    if (mouseDown) {
      if (isStart || isFinish) {
        return;
      } else {
        updateWithWalls(col, row, isWall);
      }
    }
  };
  const handleMouseDown = (e) => {
    e.preventDefault();
    if (isStart) {
      setmouseDownOnStart(true);
    } else if (isFinish) {
      setmouseDownOnFinish(true);
    } else {
      setMouseDown(true);
      updateWithWalls(col, row, isWall);
    }
  };

  return (
    <td
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseEnter={() => handleMouseEnter()}
      className={`node ${row}-${col} ${nodeClass}`}
    ></td>
  );
};

export default Node;
