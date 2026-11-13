let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n')[0];

// 11721

// 열 개씩 끊어 출력하기

// 풀이
const testLength = input.split('');
let result = '';
for (let i = 0; i < testLength.length; i++) {
  result += testLength[i];
  if (result.length === 10) {
    console.log(result);
    result = '';
  }
  if (i + 1 === testLength.length) {
    console.log(result);
  }
}
