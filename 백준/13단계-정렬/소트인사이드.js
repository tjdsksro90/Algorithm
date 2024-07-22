let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString();

// 1427번

// 소트인사이드

// 풀이
console.log([...input].sort((a, b) => b - a).join(""))