const fs = require("fs");
const text = fs.readFileSync("./day3Data.in", "utf8");
const lines = text.trim().split("\n");
let oxyLines = [...lines];
let co2Lines = [...lines];
const binaryLength = lines[0].length;
const binaryNumbers = lines.length;

let gamma = "";
let epsilon = "";

for (let i = 0; i < binaryLength; i++) {
  const positiveBits = oxyLines
    .map((x) => x[i])
    .reduce((acc, bit) => acc + +(bit === "1"), 0);
  const negativeBits = binaryNumbers - positiveBits;
  
  const newBitGamma = positiveBits !== negativeBits ? +(positiveBits > negativeBits) : 0;
  gamma += newBitGamma;
  console.log('p', oxyLines, newBitGamma, i)
  oxyLines = oxyLines.filter(x=>+x[i] === newBitGamma);
  console.log('n', oxyLines, newBitGamma, i)
}


for (let i = 0; i < binaryLength; i++) {
  const positiveBits = co2Lines
    .map((x) => x[i])
    .reduce((acc, bit) => acc + +bit, 0);
  const negativeBits = binaryNumbers - positiveBits;
  const newBitEpsilon = positiveBits !== negativeBits ? positiveBits < negativeBits : 1;
  epsilon += newBitEpsilon;
  co2Lines = co2Lines.filter(x=> +x[i] === newBitEpsilon);
  // console.log(co2Lines)
}



const gammaNumber = parseInt(gamma, 2);
const epsilonNumber = parseInt(epsilon, 2);
const powerConsumption = gammaNumber * epsilonNumber;



console.log("power consumption", powerConsumption);


