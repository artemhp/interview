var seaBattle = require("./seaBattle");

const seaArea = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// https://stackoverflow.com/questions/3689903/how-to-create-a-2d-array-of-zeroes-in-javascript
// const seaArea = Array.from(Array(10), () => Array(10).fill(0));

seaBattle.putShip(seaArea, 4);
seaBattle.putShip(seaArea, 3);
seaBattle.putShip(seaArea, 3);
seaBattle.putShip(seaArea, 2);
seaBattle.putShip(seaArea, 2);
seaBattle.putShip(seaArea, 2);
seaBattle.putShip(seaArea, 1);
seaBattle.putShip(seaArea, 1);
seaBattle.putShip(seaArea, 1);
seaBattle.putShip(seaArea, 1);
