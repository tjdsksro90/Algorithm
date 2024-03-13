
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 3003번

// 킹1개, 퀸1개, 룩2개, 비숍2개, 나이트2개, 폰8개
const number = [1,1,2,2,2,8];
const answer = [];

// 풀이
const test = input.split(' ')
for(let i = 0; i < number.length; i++){
    answer.push( number[i] - Number(test[i]))
}

console.log(answer.join(' '))