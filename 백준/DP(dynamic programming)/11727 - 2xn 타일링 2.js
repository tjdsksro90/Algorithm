let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

// 11727

// 2xn 타일링 2

// 풀이

const DP = {
  1: 1,
  2: 3,
};

for (let i = 3; i <= input; i++) {
  DP[i] = (DP[i - 1] + 2 * DP[i - 2]) % 10007;
}

console.log(DP[input]);
