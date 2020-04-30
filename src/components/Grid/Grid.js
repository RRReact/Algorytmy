import React, { useEffect, useState } from "react";
import { createInitialGrid } from "../../utils/initialGrid";
import Node from "../Node/Node";
import "./Grid.css";

const Grid = ({ buttonTypeActive }) => {
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
            <tr className={`row ${rowId + 1}`} key={rowId}>
              {row.map((node) => {
                const { col, row } = node;
                return (
                  <Node
                    buttonTypeActive={buttonTypeActive}
                    key={`${row}-${col}`}
                    col={col}
                    row={row}
                  />
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Grid;
