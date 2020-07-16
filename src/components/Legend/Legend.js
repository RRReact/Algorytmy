import React from "react";

import LegendItem from "../LegendItem/LegendItem";

import "./Legend.css";

const Legend = () => {
  const nodes = [
    { type: "unvisited" },
    { type: "wall" },
    { type: "visited" },
    { type: "shortest-path" },
    { type: "start" },
    { type: "finish" },
  ];
  return (
    <div className="legend-flex">
      {nodes.map((node) => {
        const { type } = node;
        return <LegendItem key={type} type={type} />;
      })}
    </div>
  );
};

export default Legend;
