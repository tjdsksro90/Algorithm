//여러 줄 입력
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++){
    // 공백을 잡게되서 공백제거 trim 선언
    console.log( input[i].slice(0,1) + input[i].trim().slice(-1));
}