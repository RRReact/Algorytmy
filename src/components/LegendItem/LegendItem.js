import React from "react";

import "./LegendItem.css";

const LegendItem = ({ type }) => {
  return (
    <div className="legend-item-flex">
      <div className={`legend-item ${type}`}></div>
      <p>{type}</p>
    </div>
  );
};

export default LegendItem;
