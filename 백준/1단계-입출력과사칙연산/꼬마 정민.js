const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const sliptItem = input.map(Number).reduce((a,b)=> a+b);
console.log(sliptItem);