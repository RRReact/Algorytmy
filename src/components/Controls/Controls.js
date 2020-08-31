import React, { useState } from "react";

import Legend from "../Legend/Legend";

import {
  animate,
  resetClasses,
} from "../../algorithms/dijkstra/animateDijkstra";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../algorithms/dijkstra/dijkstra";
import { createGrid } from "../../utils/createGrid";

import "./Controls.css";

const Controls = ({
  setLockGridAndControls,
  lockGridAndControls,
  grid,
  startCol,
  startRow,
  finishCol,
  finishRow,
  setGrid,
}) => {
  const [shortestPathNodes, setShortestPathNodes] = useState([]);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [startOrReset, setStartOrReset] = useState("start");

  const handleStartOrResetClick = () => {
    if (startOrReset === "start") {
      setLockGridAndControls(true);
      if (lockGridAndControls) return;
      const gridCopy = [...grid];
      const startNode = grid[startRow][startCol];
      const finishNode = grid[finishRow][finishCol];
      const listOfVisitedNodesInOrder = dijkstra(
        gridCopy,
        startNode,
        finishNode
      );
      const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
      setVisitedNodes(listOfVisitedNodesInOrder);
      setShortestPathNodes(nodesInShortestPathOrder);
      animate(
        listOfVisitedNodesInOrder,
        nodesInShortestPathOrder,
        setLockGridAndControls,
        setStartOrReset
      );
    } else {
      if (lockGridAndControls) return;
      const initialGrid = createGrid(finishCol, finishRow, startCol, startRow);
      setGrid(initialGrid);
      resetClasses(shortestPathNodes, visitedNodes);
      setStartOrReset("start");
    }
  };

  return (
    <nav className="controls">
      <button className="start-button" onClick={handleStartOrResetClick}>
        {startOrReset === "start" ? "START" : "RESET"}
      </button>
      <Legend />
      {/* <select name="" id="">
        <option defaultValue value="Dijkstra">
          Dijkstra
        </option>
      </select> */}
    </nav>
  );
};

export default Controls;
