export const animate = (
  listOfVisitedNodesInOrder,
  nodesInShortestPathOrder,
  setLockGridAndControls,
  setStartOrReset
) => {
  for (let i = 0; i <= listOfVisitedNodesInOrder.length; i++) {
    if (i === listOfVisitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(
          nodesInShortestPathOrder,
          setLockGridAndControls,
          setStartOrReset
        );
      }, 10 * i);
      return;
    }
    setTimeout(() => {
      const node = listOfVisitedNodesInOrder[i];
      if (node.isStart || node.isFinish) {
        return;
      }
      const targetedNode = document.getElementById(`${node.row}-${node.col}`);
      targetedNode.classList.remove("unvisited");
      targetedNode.classList.add("visited");
    }, 10 * i);
  }
};
const animateShortestPath = (
  nodesInShortestPathOrder,
  setLockGridAndControls,
  setStartOrReset
) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
      if (i === nodesInShortestPathOrder.length - 1) {
        setLockGridAndControls(false);
        setStartOrReset("reset");
      }
      const node = nodesInShortestPathOrder[i];
      const targetedNode = document.getElementById(`${node.row}-${node.col}`);
      targetedNode.classList.remove("visited");
      targetedNode.classList.add("shortest-path");
    }, 50 * i);
  }
};
export const resetClasses = (shortestPathNodes, visitedNodes) => {
  const concatArrays = shortestPathNodes.concat(visitedNodes);

  concatArrays.forEach((node) => {
    const targetedNode = document.getElementById(`${node.row}-${node.col}`);
    targetedNode.classList.remove("visited");
    targetedNode.classList.remove("shortest-path");
  });
};
