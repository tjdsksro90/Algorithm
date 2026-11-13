let fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';
let input = +fs.readFileSync(file).toString().trim().split('\n')[0];

// 10991

// 별 찍기 - 16

for (let i = 1; i <= input; i++) {
  const space = input - i;
  let word = ' '.repeat(space) + '*';

  if (space + 1 < input) word += ' *'.repeat(i - 1);

  console.log(word);
}
