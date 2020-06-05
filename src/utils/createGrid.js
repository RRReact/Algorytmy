export const rows = 20;
export const columns = 50;

export const createGrid = (finishCol, finishRow, startCol, startRow) => {
  const grid = [];
  for (let row = 0; row < rows; row++) {
    const currentRow = [];
    for (let col = 0; col < columns; col++) {
      currentRow.push(
        createNode(col, row, finishCol, finishRow, startCol, startRow)
      );
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row, finishCol, finishRow, startCol, startRow) => {
  return {
    col,
    row,
    distance: Infinity,
    isWall: false,
    isVisited: false,
    isFinish: col === finishCol && row === finishRow ? true : false,
    isStart: col === startCol && row === startRow ? true : false,
  };
};
