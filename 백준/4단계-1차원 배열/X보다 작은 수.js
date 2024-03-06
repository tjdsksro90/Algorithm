const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let arr = [];
arr = input[0].split(' ');

let total = Number(arr[0]);
let limit = Number(arr[1]);

let num = [];
num = input[1].split(' ');

let result = '';
for (let i = 0; i < total; i++) {
    if (Number(num[i]) < limit) {
        result += num[i] + ' ';
    }
}
console.log(result);