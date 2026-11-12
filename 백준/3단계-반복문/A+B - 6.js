let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n');

// 10953번

// A + B - 6

// 풀이
const length = input[0];
for (let i = 1; i <= length; i++) {
  const result = +input[i].split(',')[0] + +input[i].split(',')[1];
  console.log(result);
}
