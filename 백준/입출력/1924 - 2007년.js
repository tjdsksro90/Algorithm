let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = fs.readFileSync(file).toString().trim().split('\n')[0];

// 1924

// 2007년

// 풀이
const month = +input.split(' ')[0];
const day = +input.split(' ')[1];
const result = new Date(`2017-${month}-${day}`);
result.setDate(result.getDate() + 1);

console.log(result.toString().split(' ')[0].toUpperCase());
