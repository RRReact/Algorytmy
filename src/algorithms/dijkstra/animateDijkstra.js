export const animate = (
  listOfVisitedNodesInOrder,
  nodesInShortestPathOrder
) => {
  for (let i = 0; i <= listOfVisitedNodesInOrder.length; i++) {
    if (i === listOfVisitedNodesInOrder.length) {
      setTimeout(() => {
        animateShortestPath(nodesInShortestPathOrder);
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
const animateShortestPath = (nodesInShortestPathOrder) => {
  for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
    setTimeout(() => {
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
