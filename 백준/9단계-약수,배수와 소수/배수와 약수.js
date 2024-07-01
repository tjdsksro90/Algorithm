let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim();

// 5086번

// 배수와 약수

// 풀이
const test = input.split("\n");

for (let i = 0; i < test.length - 1; i++) {
  const test2 = test[i].split(" ");
  if (test2[1] % test2[0] === 0) console.log("factor");
  else if (test2[0] % test2[1] === 0) console.log("multiple");
  else console.log("neither");
}
