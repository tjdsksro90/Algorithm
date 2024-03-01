//한 줄 입력
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
const input = fs.readFileSync(file).toString().trim();

//여러 줄 입력
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split('\n');
