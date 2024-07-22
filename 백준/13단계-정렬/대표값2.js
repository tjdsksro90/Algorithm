let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 2587번

// 대표값2

// 풀이
const sum = input.reduce((acc, cur) => acc + +cur, 0)
const center = input.sort((a, b) => a - b)
console.log(sum / input.length)
console.log(center[Math.round(input.length / 2) - 1])