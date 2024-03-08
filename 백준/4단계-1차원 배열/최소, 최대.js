const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString()
    .trim().split('\n')
    ;

let total = input[0];
let num = input[1].split(' ').map(Number);

let max = num[0]; // 20
let min = num[0]; // 20

for (let i = 0; i < total; i++) {
    if (max < num[i]) max = num[i];
    if (min > num[i]) min = num[i];
}
console.log(min, max);