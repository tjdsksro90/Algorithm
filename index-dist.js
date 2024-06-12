const fs = require("fs"); // 제출시 삭제
const path = "test.txt"; // 제출시 삭제

const readline = require("readline");
const rl = readline.createInterface({
  // input: process.stdin, // 제출시 활성화
  input: fs.createReadStream(path), // 제출시 삭제
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 코드 시작
  const [n, m, k] = input[0].split(" ");
  let x_arr = [];
  let y_arr = [];
  let x = 0;
  let y = 0;

  for (let i = 1; i <= k; i++) {
    x_arr.push(Number(input[i][0]));
    y_arr.push(Number(input[i][2]));
  }

  x = Math.max(...x_arr) - Math.min(...x_arr);
  y = Math.max(...y_arr) - Math.min(...y_arr);

  console.log((x + 2) * 2 + (y + 2) * 2);

  process.exit();
});