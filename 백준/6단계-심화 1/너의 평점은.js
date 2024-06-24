let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 25206번

// 너의 평점은

// 풀이
const arr = input.split('\n').map( x => x.split(/\s+/));

const table = {
	"A+": 4.5, "A0": 4.0, "B+": 3.5, "B0": 3.0, "C+": 2.5, "C0": 2.0, "D+": 1.5, "D0": 1.0, "F": 0.0
}

let s = 0; // 전공 평점
let t = 0; // 학점 총합(학점 * 전공 평점)

for (let [a, b, c] of arr) {
  if( c === "P") continue;
  t += b * table[c]; // string * string = number
  s += +b; // s에 숫자화된 b를 계속 더하기
}

console.log(t/s)