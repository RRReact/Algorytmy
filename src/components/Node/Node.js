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
    : "unvisited";

  const handleMouseEnter = () => {
    if (mouseDownOnStart || mouseDownOnFinish) {
      if (isStart || isFinish || isWall) {
        return;
      } else {
        updateStartOrFinish(col, row);
      }
    }
    if (mouseDown) {
      if (isStart || isFinish) {
        return;
      } else {
        updateWithWalls(col, row, isWall);
      }
    }
  };
  const handleEventsDown = (e) => {
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
      onMouseDown={(e) => handleEventsDown(e)}
      ontouchstart={(e) => handleEventsDown(e)}
      onMouseEnter={() => handleMouseEnter()}
      className={`node ${nodeClass}`}
      id={`${row}-${col}`}
    ></td>
  );
};

export default Node;
