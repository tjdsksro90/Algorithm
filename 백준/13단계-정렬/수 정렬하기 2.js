let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 2751번

// 수 정렬하기 2

// 풀이
input.shift();

const solution = arr => {
  return arr.sort((a, b) => a - b).join("\n");
};

console.log(solution(input));
