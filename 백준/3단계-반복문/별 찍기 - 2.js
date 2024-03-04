const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const num = Number(input[0]);

let result = '';

// 엔터 반복
for (let i = 0; i < num; i++) {
    if (num > 100) {
        break;
    }
    // 띄어쓰기 반복
    for (let j = 0; j < num - i - 1; j++) {
        result += ' ';
    }
    // 별 반복
    for (let k = 0; k <= i; k++) {
        result += '*';
    }
    result += `\n`;
}

console.log(result);