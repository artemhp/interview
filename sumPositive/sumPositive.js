const getPositiveArray = (arr) => {
  return arr.filter((item) => item > 0).reduce((a, b) => a + b);
};

// var step;
// for (step = 0; step < 5; step++) {
//   // Запускается 5 раз, с шагом от 0 до 4.
//   console.log('Идём 1 шаг на восток');
// }
