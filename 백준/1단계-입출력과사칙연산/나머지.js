let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]);

console.log((num1 + num2) % num3);
console.log(((num1%num3) + (num2%num3))%num3);
console.log((num1*num2)%num3);
console.log(((num1%num3) * (num2%num3))%num3);