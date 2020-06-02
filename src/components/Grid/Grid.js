import React, { useEffect, useState } from "react";
// import { dijkstra } from "../../algorithms/dijkstra";
import { createGrid } from "../../utils/createGrid";
import Node from "../Node/Node";

import "./Grid.css";

const Grid = () => {
  // initial start and finish nodes coordinates

  const START_ROW = 10;
  const START_COL = 10;
  const FINISH_COL = 30;
  const FINISH_ROW = 10;
  const [grid, setGrid] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownOnFinish, setmouseDownOnFinish] = useState(false);
  const [mouseDownOnStart, setmouseDownOnStart] = useState(false);

  //make a new grid on mount with start and finish nodes
  useEffect(() => {
    const initialGrid = createGrid(
      FINISH_COL,
      FINISH_ROW,
      START_COL,
      START_ROW
    );
    setGrid(initialGrid);
    //eslint-disable-next-line
  }, []);

  const handleMouseUp = () => {
    setMouseDown(false);
    setmouseDownOnStart(false);
    setmouseDownOnFinish(false);
  };
  const updateWithWalls = (col, row, isWall) => {
    let gridCopy = [...grid];
    gridCopy[row][col].isWall = !isWall;
    setGrid(gridCopy);
  };
  const updateStartOrFinish = (col, row) => {
    let gridCopy = [...grid];
    if (mouseDownOnFinish) {
      gridCopy.map((gridC) => {
        return gridC.map((g) => {
          return (g.isFinish = false);
        });
      });
      gridCopy[row][col].isFinish = true;
      setGrid(gridCopy);
    } else if (mouseDownOnStart) {
      gridCopy.map((gridC) => {
        return gridC.map((g) => {
          return (g.isStart = false);
        });
      });
      gridCopy[row][col].isStart = true;
      setGrid(gridCopy);
    }
  };
  return (
    <>
      <table onMouseUp={handleMouseUp} className="grid">
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
                      mouseDownOnStart={mouseDownOnStart}
                      mouseDownOnFinish={mouseDownOnFinish}
                      setMouseDown={setMouseDown}
                      setmouseDownOnFinish={setmouseDownOnFinish}
                      setmouseDownOnStart={setmouseDownOnStart}
                      updateWithWalls={updateWithWalls}
                      updateStartOrFinish={updateStartOrFinish}
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
