let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 2522

// 별 찍기 - 12

function printLine(i, input) {
  const num = i;
  const space = input - i;
  console.log(' '.repeat(space) + '*'.repeat(num));
}

for (let i = 1; i < input; i++) {
  printLine(i, input);
}

for (let i = input; i > 0; i--) {
  printLine(i, input);
}
