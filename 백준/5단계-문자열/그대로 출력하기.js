
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

// 11718번

// 입력 받은 그대로 출력

// 풀이
for(let i = 0; i < input.length; i++){
    console.log(input[i])
}