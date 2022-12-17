const { number } = require("./day1Data");

function partA(number) {
  let counter = 0;
  for (let i = 1; i < number.length; i++) {
    if (number[i - 1] < number[i]) {
      counter++;
    } else {
      counter += 0;
    }
  }
  console.log(counter);
}

partA(number); //correct answer = 1559

function partB(number) {
  let counter = 0;
  for (let i = 1; i < number.length; i++) {
    if (i + 2 <= number.length) {
      let sumA = number[i - 1] + number[i] + number[i + 1];
      let sumB = number[i] + number[i + 1] + number[i + 2];
      if (sumA < sumB) {
        counter++;
      } else {
        counter += 0;
      }
    }
  }
  console.log(counter);
}
partB(number); // correct answer = 1600
