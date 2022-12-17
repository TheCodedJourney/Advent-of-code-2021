const { directionsData } = require("./day2Data");

function depthAndDistanceA(directionsData) {
  let forward = 0;
  let down = 0;
  let up = 0;

  for (let i = 0; i < directionsData.length; i++) {
    if (directionsData[i] === "down") {
      down += directionsData[i + 1];
    }
    if (directionsData[i] === "up") {
      up += directionsData[i + 1];
    }
    if (directionsData[i] === "forward") {
      forward += directionsData[i + 1];
    }
  }
  console.log(
    (down - up) * forward,
    "correct value"
  ); // correct answer 2147104
}

depthAndDistanceA(directionsData);

function depthAndDistanceB(directionsData) {
  let horizontalPosition = 0;
  let aim = 0;
  let depth = 0;

  for (let i = 0; i < directionsData.length; i++) {
    if (directionsData[i] === "down") {
      aim += directionsData[i + 1];
    }
    if (directionsData[i] === "up") {
      aim -= directionsData[i + 1];
    }
    if (directionsData[i] === "forward") {
      horizontalPosition += directionsData[i + 1];
      depth += aim * directionsData[i + 1];
    }
  }
  console.log(depth * horizontalPosition, "correct value")
}

depthAndDistanceB(directionsData);

// second task

// forward X increases the horizontal position by X units.
// down X increases the depth by X units.
// up X decreases the depth by X units.

// down X increases your aim by X units.
// up X decreases your aim by X units.
// forward X does two things:
// It increases your horizontal position by X units.
// It increases your depth by your aim multiplied by X.

// What do you get if you multiply your final horizontal position by your final depth?

//467929606712 == too high
// 2042472984 === too low
// 2046767192 === next test - not right either
// https://adventofcode.com/2021/day/2
