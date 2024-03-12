
let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 1157번

// 제일 많이 나온 알파벳 출력. 가장 큰게 중복되면 ? 출력

// 풀이
// 1. 대문자로 전체 변경
const word = input.toUpperCase();
// 2. 오브젝트로 단어와 갯수 담기
const obj = {};
for (const char of word) {
    if(!obj[char]){
        obj[char] = 1;
    } else {
        obj[char] += 1;
    }
}
// 3. 오브젝트 key value 비교해서 해당 알파벳 출력.중복되면 ? 출력
let result = '';
let count = 0;
for (const x in obj){
    if(obj[x] > count){
        result = x;
        count = obj[x];
    }
    else if (obj[x] === count){
        result = '?'
    }
}
// 결과 출력
console.log(result)