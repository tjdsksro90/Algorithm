let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 1316번

// 그룹 단어 체커

// 풀이
const arr = input.split('\n')
let result = 0;

for(let i = 1; i <= Number(arr[0]); i++){
  const word = arr[i];
  const group = [];
  let isBoolean = true;

  for ( let j = 0; j < word.length; j++) {
    if( group.indexOf(word[j]) === -1 ) {
      group.push(word[j]);
    } else {
      if( group.indexOf(word[j]) !== group.length - 1 ) {
        isBoolean = false;
        break;
      }
    }
  }

  if(isBoolean) result++;
}

console.log(result);