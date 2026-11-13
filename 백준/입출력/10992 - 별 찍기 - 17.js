let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 10992

// 별 찍기 - 17

for (let i = 1; i <= input; i++) {
  const num = 2 * i - 1 - 2;
  const space = input - i;
  let word = ' '.repeat(space) + '*';

  if (space + 1 < input) {
    if (space !== 0) word += ' '.repeat(num) + '*';
    else word += '*'.repeat(num) + '*';
  }

  console.log(word);
}
