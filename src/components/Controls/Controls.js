import React, { useState } from "react";

import "./Controls.css";
import {
  animate,
  resetClasses,
} from "../../algorithms/dijkstra/animateDijkstra";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../algorithms/dijkstra/dijkstra";
import { createGrid } from "../../utils/createGrid";

const Controls = ({
  grid,
  startCol,
  startRow,
  finishCol,
  finishRow,
  setGrid,
}) => {
  const [shortestPathNodes, setShortestPathNodes] = useState([]);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const handleStartClick = () => {
    const gridCopy = [...grid];
    const startNode = grid[startRow][startCol];
    const finishNode = grid[finishRow][finishCol];
    const listOfVisitedNodesInOrder = dijkstra(gridCopy, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    setVisitedNodes(listOfVisitedNodesInOrder);
    setShortestPathNodes(nodesInShortestPathOrder);
    animate(listOfVisitedNodesInOrder, nodesInShortestPathOrder);
  };
  const handleResetClick = () => {
    const initialGrid = createGrid(finishCol, finishRow, startCol, startRow);
    setGrid(initialGrid);
    resetClasses(shortestPathNodes, visitedNodes);
  };
  return (
    <nav>
      <button className="start-button" onClick={handleStartClick}>
        START
      </button>
      <button className="reset-button" onClick={handleResetClick}>
        reset
      </button>
    </nav>
  );
};

export default Controls;
