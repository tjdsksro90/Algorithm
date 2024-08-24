const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 2558번: A + B - 2
// https://www.acmicpc.net/problem/2558

const a = Number(input[0]);
const b = Number(input[1]);
console.log(a + b);
