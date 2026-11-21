let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 2446

// 별 찍기 - 9

function printLine(i, input) {
  const num = 2 * i - 1;
  const space = input - i;
  console.log(' '.repeat(space) + '*'.repeat(num));
}

for (let i = input; i > 0; i--) {
  printLine(i, input);
}

for (let i = 2; i <= input; i++) {
  printLine(i, input);
}
