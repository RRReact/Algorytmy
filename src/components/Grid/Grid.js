import React, { useEffect, useState } from "react";
import { createInitialGrid } from "../../utils/initialGrid";
import Node from "../Node/Node";
import "./Grid.css";

const Grid = () => {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    const newGrid = createInitialGrid();
    setGrid(newGrid);
    //eslint-disable-next-line
  }, []);

  return (
    <table className="grid">
      <tbody>
        {grid.map((row, rowId) => {
          return (
            <tr className="row" key={rowId}>
              {row.map((node) => {
                const { col, row } = node;
                return <Node key={`${row}-${col}`} />;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
