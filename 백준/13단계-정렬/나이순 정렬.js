const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 10814번: 나이순 정렬
// https://www.acmicpc.net/problem/10814

const [N, ...arr] = input;
arr.sort((a,b)=> a.split(' ')[0] - b.split(' ')[0]);
arr.forEach((item)=> console.log(item));