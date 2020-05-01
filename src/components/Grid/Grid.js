import React, { useEffect, useState } from "react";

import { createInitialGrid } from "../../utils/initialGrid";
import Node from "../Node/Node";
import Menu from "../Menu/Menu";

import "./Grid.css";

const Grid = () => {
  const [grid, setGrid] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [updateGrid, setUpdateGrid] = useState(false);
  const [buttonTypeActive, setButtonTypeActive] = useState(null);

  //make a new grid on mount
  useEffect(() => {
    const initialGrid = createInitialGrid();
    setGrid(initialGrid);
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

  function getUpdatedNodes(col, row, type) {
    console.log(col, row, type);
    setUpdateGrid(false);
  }

  return (
    <>
      <Menu
        setButtonTypeActive={setButtonTypeActive}
        setUpdateGrid={setUpdateGrid}
      />
      <table className="grid">
        <tbody>
          {grid.map((row, rowId) => {
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
                      typeOfNode={typeOfNode}
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
