let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

// 11726

// 2xn 타일링.js

// 풀이

// 규칙을 먼저 찾자 - 그래서 나온 결과
// memo[n] = memo[n -1] + memo[n - 2]

const dp = {
  1: 1,
  2: 2,
};

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[input]);
