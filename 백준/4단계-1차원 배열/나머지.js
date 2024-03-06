const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = new Set(input.map(x => x % 42)).size;

console.log(result);