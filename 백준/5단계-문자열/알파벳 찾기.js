//여러 줄 입력
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim();

// 단어에서 알파벳이 포함되어있으면 숫자의 위치를 반환, 없으면 -1
// 알파벳 아스키코드로 반복문 돌려서 indexOf함수를 활용하여 구할 수 있음
// 알파벳은 fromCharCode()함수를 활용하여 유니코드를 문자로변경
let alp = [];
//아스키코드 알파벳 소문자 범위 97~ 122
for (let i = 97; i <= 122; i++) {
  alp += input.indexOf(String.fromCharCode(i)) + " ";
}

console.log(alp);