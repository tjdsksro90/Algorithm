let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let answer = '';

for (let i = 1; i <= n; i++) {
    let n = input[i].split(' ');
    answer += Number(n[0]) + Number(n[1]) + "\n";
}

console.log(answer);