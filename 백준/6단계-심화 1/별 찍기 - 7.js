
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 2444번

// 별 갯수대로 찍기

// 풀이
// 1. 1부터 num-1까지 공백과 별 찍기
// 2. num부터 1까지 공백과 별 찍기
const num = Number(input);

for ( let i = 1; i < num; i++ ) {
    let blank = ' '.repeat(num-i);
    let starts = '*'.repeat(i+(i-1));
    console.log( blank + starts )
}

for ( let j = num; j > 0; j-- ) {
    let blank = ' '.repeat(num-j);
    let starts = '*'.repeat(j+(j-1));
    console.log( blank + starts )
}
