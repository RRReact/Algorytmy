import React, { useEffect, useState } from "react";
import { createInitialGrid } from "../../utils/initialGrid";
import Node from "../Node/Node";
import "./Grid.css";

const Grid = ({ buttonTypeActive }) => {
  const [grid, setGrid] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(
    () => {
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    },
    //eslint-disable-next-line
    [buttonTypeActive]
  );

  function handleMouseDown() {
    setIsMouseDown(true);
  }
  function handleMouseUp() {
    setIsMouseDown(false);
  }
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
                    isMouseDown={isMouseDown}
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
