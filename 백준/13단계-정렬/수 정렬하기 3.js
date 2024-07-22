let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 10989번

// 수 정렬하기 3

// 풀이
input.sort((a, b) => a - b)
input.forEach(num => console.log(num))