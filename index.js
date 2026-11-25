let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

// 11726

// 2xn 타일링.js

// 풀이

// 규칙을 먼저 찾자 - 그래서 나온 결과
// memo[n] = memo[n -1] + memo[n - 2]

const DP = {
  1: 0,
};

for (let i = 2; i <= input; i++) {
  DP[i] = DP[i - 1] + 1;

  if (i % 2 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 2] + 1);
  }

  if (i % 3 === 0) {
    DP[i] = Math.min(DP[i], DP[i / 3] + 1);
  }
}

console.log(DP[input]);
