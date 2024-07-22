let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 25305번

// 커트라인

// 풀이
const pass = input[0].split(' ')[1]
const award = input[1].split(' ').sort((a, b) => b - a)
console.log(award[pass - 1])