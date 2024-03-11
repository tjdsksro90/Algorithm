const fs = require('fs');

//백준 문제제출
//const input = fs.readFileSync('dev/stdin').toString().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');
const pickString = input[0].toString();
const pickNumber = Number(input[1]);

console.log(pickString[pickNumber - 1]);