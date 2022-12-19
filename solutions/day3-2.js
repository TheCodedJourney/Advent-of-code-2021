const fs = require("fs");
const text = fs.readFileSync("./data.in", "utf8");
const lines = text.trim().split("\n");
let oxyLines = [...lines];
let co2Lines = [...lines];

let gamma = '';
let epsilon = '';

for (let i = 0; i < lines[0].length; i++) {
  if (co2Lines.length <= 1) {
    gamma += oxyLines[0].charAt(i);
    continue;
  }
  const positiveBits = oxyLines
    .map((x) => x.charAt(i))
    .reduce((acc, bit) => acc + +(bit === "1"), 0);
  const negativeBits = oxyLines.length - positiveBits;
  const newBitGamma = positiveBits !== negativeBits ? +(positiveBits > negativeBits) : 1;
  gamma += newBitGamma;
  oxyLines = oxyLines.filter(x => +x.charAt(i) === newBitGamma);
}

for (let i = 0; i < lines[0].length; i++) {
  if (co2Lines.length <= 1) {
    epsilon += co2Lines[0].charAt(i);
    continue;
  }
  const positiveBits = co2Lines
    .map((x) => x.charAt(i))
    .reduce((acc, bit) => acc + +bit, 0);
  const negativeBits = co2Lines.length - positiveBits;
  const newBitEpsilon = positiveBits !== negativeBits ? +(positiveBits < negativeBits) : 0;
  epsilon += newBitEpsilon;
  co2Lines = co2Lines.filter(x => +x.charAt(i) === newBitEpsilon);
}

const oxygenRating = parseInt(gamma, 2);
const co2Rating = parseInt(epsilon, 2);
const lifeSupportRating = oxygenRating * co2Rating;

console.log("Life support rating", lifeSupportRating);

