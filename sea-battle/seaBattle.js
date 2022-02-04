const checkIfTouch = (seaArea, coordinate) => {
  const row = coordinate[0];
  const column = coordinate[1];
  // Very ugly way to check if around item all other items is zero
  if (
    (seaArea[row + 1] && seaArea[row + 1][column + 1] === 1) ||
    (seaArea[row - 1] && seaArea[row - 1][column - 1] === 1) ||
    (seaArea[row + 1] && seaArea[row + 1][column - 1] === 1) ||
    (seaArea[row - 1] && seaArea[row - 1][column + 1] === 1) ||
    (seaArea[row - 1] && seaArea[row - 1][column] === 1) ||
    (seaArea[row] && seaArea[row][column + 1] === 1) ||
    (seaArea[row] && seaArea[row][column - 1] === 1) ||
    (seaArea[row + 1] && seaArea[row + 1][column] === 1)
  ) {
    return false;
  }
  return true;
};

const randomBool = () => Math.random() < 0.5;
const rand = (value) => Math.floor(Math.random() * value);

const putShip = (seaArea, size, coordinates = []) => {
  const mutateSeaArea = (coordinates, seaArea) =>
    coordinates.forEach((el) => (seaArea[el[0]][el[1]] = 1));

  // Random Direction (it can be vertical or horizontal)
  const isVertical = randomBool();
  if (isVertical) {
    var row = rand(10 - size);
    var column = rand(10);
  } else {
    var row = rand(10);
    var column = rand(10 - size);
  }
  for (let i = 0; i < size; i++) {
    const currentRow = isVertical ? row + i : row;
    const currentColumn = isVertical ? column : column + i;
    // Try to build one more time, if seaArea[currentRow][currentColumn] is not zero
    // or it Touch some other ship on seaArea
    if (
      seaArea[currentRow][currentColumn] === 1 ||
      !checkIfTouch(seaArea, [currentRow, currentColumn])
    ) {
      // Recursively
      return putShip(seaArea, size);
    }
    coordinates.push([currentRow, currentColumn]);
  }
  // Change sea area by adding new ship
  mutateSeaArea(coordinates, seaArea);
  return { coordinates, seaArea };
};

exports.putShip = putShip;
