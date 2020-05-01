import React from "react";
import "./Node.css";

const Node = ({ col, row, isWall, isFinish, isStart }) => {
  const nodeClass = isWall
    ? "wall"
    : isStart
    ? "start"
    : isFinish
    ? "finish"
    : null;
  return <td className={`node ${row}-${col} ${nodeClass}`}></td>;
};

export default Node;
