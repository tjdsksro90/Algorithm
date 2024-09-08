const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 1546번: 평균
// https://www.acmicpc.net/problem/1546

const [N, ...arr] = input;
const list = [...arr][0].split(" ");
let result = 0;
let newArr = [];
const max = Math.max(...list);

// list 중에 최댓값 고르기 = M
for (let i = 0; i < N; i++) {
  newArr.push((Number(list[i]) / max) * 100);
}

// console.log((30 / 30) * 100);
for (let i = 0; i < N; i++) {
  result += Number(newArr[i]);
}

console.log((result / N).toFixed(6));
