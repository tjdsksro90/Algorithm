let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 2441

// 별 찍기 - 4
for (let i = 0; i < input; i++) {
  console.log(' '.repeat(i) + '*'.repeat(input - i));
}
