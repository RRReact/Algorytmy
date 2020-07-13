import React, { useState } from "react";
import { animate, resetClasses } from "../../algorithms/animateDijkstra";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../algorithms/dijkstra";
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
    <>
      <button onClick={handleStartClick}>start</button>
      <button onClick={handleResetClick}>reset</button>
    </>
  );
};

export default Controls;
