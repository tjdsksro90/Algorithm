let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 2941번

// 크로아티아 알파벳

// 풀이
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for( let alphbet of croatia ){
  input = input.split(alphbet).join('Q');
}

console.log(input.length);