import React, { useEffect, useState } from "react";
import { dijkstra } from "../../algorithms/dijkstra";
import { createGrid } from "../../utils/createGrid";
import Node from "../Node/Node";

import "./Grid.css";

const Grid = () => {
  // initial start and finish nodes coordinates

  const [grid, setGrid] = useState([]);
  const [startRow, setStartRow] = useState(10);
  const [startCol, setStartCol] = useState(10);
  const [finishCol, setFinishCol] = useState(30);
  const [finishRow, setFinishRow] = useState(10);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownOnFinish, setmouseDownOnFinish] = useState(false);
  const [mouseDownOnStart, setmouseDownOnStart] = useState(false);

  //make a new grid on mount with start and finish nodes
  useEffect(() => {
    const initialGrid = createGrid(finishCol, finishRow, startCol, startRow);
    setGrid(initialGrid);
    //eslint-disable-next-line
  }, []);

  const handleMouseUp = () => {
    setMouseDown(false);
    setmouseDownOnStart(false);
    setmouseDownOnFinish(false);
  };
  const handleStartClick = () => {
    const startNode = grid[startRow][startCol];
    const finishNode = grid[finishRow][finishCol];

    const listOfVisitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    console.log(listOfVisitedNodesInOrder);

    // getNodesInShortestPathOrder(finishNode);
  };
  const updateWithWalls = (col, row, isWall) => {
    const gridCopy = [...grid];
    gridCopy[row][col].isWall = !isWall;
    setGrid(gridCopy);
  };
  const updateStartOrFinish = (col, row) => {
    let gridCopy = [...grid];
    //finish node position change
    if (mouseDownOnFinish) {
      setFinishCol(col);
      setFinishRow(row);
      gridCopy.map((gridC) => {
        return gridC.map((g) => {
          return (g.isFinish = false);
        });
      });
      gridCopy[row][col].isFinish = true;
      setGrid(gridCopy);
    }
    //start node position change
    else if (mouseDownOnStart) {
      setStartCol(col);
      setStartRow(row);
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
      <button onClick={handleStartClick}>start</button>
      <table onMouseUp={handleMouseUp} className="grid">
        <tbody>
          {grid.map((row, rowId) => {
            return (
              <tr className={`row ${rowId}`} key={rowId}>
                {row.map((node) => {
                  const {
                    col,
                    row,
                    isStart,
                    isFinish,
                    isWall,
                    isVisited,
                  } = node;
                  return (
                    <Node
                      key={`${row}-${col}`}
                      col={col}
                      row={row}
                      isStart={isStart}
                      isWall={isWall}
                      isFinish={isFinish}
                      isVisited={isVisited}
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
