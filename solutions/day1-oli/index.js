const fs = require('fs');

const sonarSweep = (filename) => {
    let increase = 0;
    const text = fs.readFileSync(filename, 'utf8');
    const lines = text.trim().split('\n');
    for (let i = 1; i < lines.length; i++) {
        const prev = +lines[i-1];
        const next = +lines[i];
        if (prev < next) {
            increase++;
        }
    }
    return increase;
}

console.log(sonarSweep('./data.in'));