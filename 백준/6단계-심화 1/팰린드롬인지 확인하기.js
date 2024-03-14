
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 10988번

// 팰린드롬인지 확인하기
// 앞으로 읽든 뒤로 읽든 동일하면 1 아니면 0 출력

// 풀이
// 1. for문으로 처음과 끝을 안으로 옮겨가며 비교
// 2. Math.floor로 가운데까지 for문
const arr = [...input]
let answer = 1;

for (let i = 0; i < Math.floor(arr.length/2); i++ ) {
    if ( arr[i] === arr[arr.length - (i + 1)]) {
        answer = 1;
    }
    else {
        answer = 0;
        break;
    }
}

console.log(answer)