import React, { useEffect, useState } from "react";
import { dijkstra } from "../../algorithms/dijkstra";
import { createGrid } from "../../utils/createGrid";
import Node from "../Node/Node";

import "./Grid.css";

const Grid = () => {
  // initial start and finish nodes coordinates
  const START_NODE_COL = 10;
  const START_NODE_ROW = 10;
  const FINISH_NODE_COL = 30;
  const FINISH_NODE_ROW = 10;

  const [grid, setGrid] = useState([]);
  //make a new grid on mount with start and finish nodes
  useEffect(() => {
    const initialGrid = createGrid(
      FINISH_NODE_COL,
      FINISH_NODE_ROW,
      START_NODE_COL,
      START_NODE_ROW
    );
    setGrid(initialGrid);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <table className="grid">
        <tbody>
          {grid.map((row, rowId) => {
            return (
              <tr className={`row ${rowId}`} key={rowId}>
                {row.map((node) => {
                  const { col, row, isStart, isFinish } = node;
                  return (
                    <Node
                      key={`${row}-${col}`}
                      col={col}
                      row={row}
                      isStart={isStart}
                      isFinish={isFinish}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Grid;
