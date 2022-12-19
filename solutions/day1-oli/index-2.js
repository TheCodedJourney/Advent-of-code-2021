const fs = require('fs');

const threeSum = (filename) => {
    const text = fs.readFileSync(filename, 'utf8');
    const lines = text.trim().split('\n');
    const result = Array(lines.length);

    for (let i = 2; i < lines.length; i++) {
        result[i] = +lines[i-2] + +lines[i-1] + +lines[i];
    }
    return result;
}

const sonarSweep = (arr) => {
    let increase = 0;

    for (let i = 1; i < arr.length; i++) {
        const prev = +arr[i-1];
        const next = +arr[i];
        if (prev < next) {
            increase++;
        }
    }
    return increase;
}

console.log(sonarSweep(threeSum('./data.in')));