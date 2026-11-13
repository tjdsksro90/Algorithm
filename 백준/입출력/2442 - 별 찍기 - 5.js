let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 2442

// 별 찍기 - 5

for (let i = 1; i < input + 1; i++) {
  const num = 2 * i - 1;
  const space = input - i;
  console.log(' '.repeat(space) + '*'.repeat(num));
}
