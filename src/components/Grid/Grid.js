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
  const [mouseDown, setMouseDown] = useState(false);
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
  const handleMouseDown = (e) => {
    e.preventDefault();
    setMouseDown(true);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
  };
  const updateWithWalls = (col, row) => {
    console.log(col, row);
  };
  return (
    <>
      <table
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="grid"
      >
        <tbody>
          {grid.map((row, rowId) => {
            return (
              <tr className={`row ${rowId}`} key={rowId}>
                {row.map((node) => {
                  const { col, row, isStart, isFinish, isWall } = node;
                  return (
                    <Node
                      key={`${row}-${col}`}
                      col={col}
                      row={row}
                      isStart={isStart}
                      isWall={isWall}
                      isFinish={isFinish}
                      mouseDown={mouseDown}
                      updateWithWalls={updateWithWalls}
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
