let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split('\n');

let answer = 0;
for(let i = 0; i < [...input[1]].length; i++){
    answer += Number([...input[1][i]]);
}
console.log(answer);