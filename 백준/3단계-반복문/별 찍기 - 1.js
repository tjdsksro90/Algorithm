let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input);

let answer = '';

for (let i = 0; i < num; i++)
{
    for (let j = 0; j <= i; j++)
    {
        answer += '*';
    }
    answer += '\n';
}

console.log(answer);