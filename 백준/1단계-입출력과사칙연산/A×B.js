const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line)
      {

    input = line.split(' ').map((el) => parseInt(el));
}).on('close', function ()
      {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    console.log(num1 * num2)
    process.exit();
});

// 코드 간소화
s=require('fs').readFileSync('/dev/stdin')+'';console.log(s[0]*s[2])