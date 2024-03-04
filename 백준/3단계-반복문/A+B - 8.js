let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++)
{
    let n = input[i].split(' ');

    console.log(`Case #${i}: ${Number(n[0])} + ${Number(n[1])} = ${Number(n[0]) + Number(n[1])}`);
}