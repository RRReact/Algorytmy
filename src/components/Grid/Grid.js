import React, { useEffect, useState } from "react";
import { dijkstra } from "../../algorithms/dijkstra";
import { createGrid } from "../../utils/createGrid";
import Node from "../Node/Node";
import Menu from "../Menu/Menu";

import "./Grid.css";

const Grid = () => {
  // temporary start and finish nodes coordinates
  const START_NODE_COL = 10;
  const START_NODE_ROW = 10;
  const FINISH_NODE_COL = 30;
  const FINISH_NODE_ROW = 10;

  const [initialGrid, setInitialGrid] = useState([]);
  const [nodeList, setNodeList] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [updateGrid, setUpdateGrid] = useState(false);
  const [buttonTypeActive, setButtonTypeActive] = useState(null);

  //make a new grid on mount
  useEffect(() => {
    const initialGrid = createGrid();
    setInitialGrid(initialGrid);
    //eslint-disable-next-line
  }, []);
  //add eventlisteners each time button type changes
  useEffect(
    () => {
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);
    },
    //eslint-disable-next-line
    [buttonTypeActive]
  );

  function handleMouseDown(e) {
    e.preventDefault();
    setIsMouseDown(true);
  }
  function handleMouseUp() {
    setIsMouseDown(false);
  }
  //creating updated node state and adding it to nodeList
  function getUpdatedNodes(col, row, type) {
    const newNode = { row, col, type };
    setNodeList((prevState) => [...prevState, newNode]);
    setUpdateGrid(false);
  }
  //starting after clicking start button in menu component
  function start() {
    dijkstra(nodeList);
  }
  return (
    <>
      <Menu
        setButtonTypeActive={setButtonTypeActive}
        setUpdateGrid={setUpdateGrid}
        start={start}
      />
      <table className="grid">
        <tbody>
          {initialGrid.map((row, rowId) => {
            return (
              <tr className={`row ${rowId}`} key={rowId}>
                {row.map((node) => {
                  const { col, row, typeOfNode } = node;
                  return (
                    <Node
                      updateGrid={updateGrid}
                      getUpdatedNodes={getUpdatedNodes}
                      isMouseDown={isMouseDown}
                      buttonTypeActive={buttonTypeActive}
                      key={`${row}-${col}`}
                      col={col}
                      row={row}
                      typeOfNode={
                        col === START_NODE_COL && row === START_NODE_ROW
                          ? "start"
                          : col === FINISH_NODE_COL && row === FINISH_NODE_ROW
                          ? "finish"
                          : typeOfNode
                      }
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
