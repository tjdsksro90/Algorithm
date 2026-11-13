let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString();

// 11719번

// 입력 받은 그대로 출력 2

// 풀이
console.log(input);
