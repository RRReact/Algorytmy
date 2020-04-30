const rows = 20;
const columns = 50;

export const createInitialGrid = () => {
  const grid = [];
  for (let row = 1; row < rows + 1; row++) {
    const currentRow = [];
    for (let col = 1; col < columns + 1; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (col, row) => {
  return { col, row };
};
