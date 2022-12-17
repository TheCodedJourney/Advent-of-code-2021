const fs = require("fs");
const text = fs.readFileSync("./day3Data.in", "utf8");
const lines = text.trim().split("\n");
const binaryLength = lines[0].length;
const binaryNumbers = lines.length;

const flipBits = (binary) =>
  binary
    .split("")
    .map((bit) => (bit === "0" ? "1" : "0"))
    .join("");

let gamma = "";

for (let i = 0; i < binaryLength; i++) {

  const positiveBits = lines
    .map((x) => x[i])
    .reduce((acc, bit) => acc + +(bit === "1"), 0);
  const negativeBits = binaryNumbers - positiveBits;

  gamma += +(positiveBits >= negativeBits);
}

const gammaNumber = parseInt(gamma, 2);
const epsilonNumber = parseInt(flipBits(gamma), 2);
const powerConsumption = gammaNumber * epsilonNumber;

console.log("power consumption", powerConsumption);

