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

const oxygenGeneratorRating = 0;
const CO2ScrubberRating = 0;



const lifeSupportRating = 0;

//notes
/*
RULES: 
Only numbers selected by the bit criteria for the type of rating value for which you are searching.
1. Discard numbers which do not match the bit criteria.

2. If you only have one number left, stop; this is the rating value for which you are searching.
Otherwise, repeat the process, considering the next bit to the right.

//OxygenRating = most common value in current bit position - keep only numbers with that bit in that position - if 0 and 1 is 50/50, keep values with a 1 in that position 
//CO2Rating = least common value in current bit position - keep only numbers with that bit in that position - if 0 and 1 is 50/50, keep values with a 0 in that position
 bit criteria depends on which type of rating value you want to find:

 */

