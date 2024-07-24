let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim();

// 2501번

// 약수 구하기

// 풀이
const test = input.split(" ");
let arr = [];
let result;

for (let i = 1; i <= test[0]; i++) {
  if (test[0] % i === 0) arr.push(i);
}

result = arr[test[1] - 1];

console.log(result ? result : 0);
