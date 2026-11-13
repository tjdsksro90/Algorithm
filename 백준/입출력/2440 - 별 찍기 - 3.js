let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 2440

// 별 찍기 - 3

// 풀이
for (let i = input; i > 0; i--) {
  console.log('*'.repeat(i));
}
