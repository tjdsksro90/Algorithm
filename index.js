const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 9506번: 약수들의 합

for (let i = 0; i < input.length; i++) {
  let number = parseInt(input[i]);
  if (number === -1) break;

  let divisors = [];
  for (let j = 1; j < number; j++) {
    if (number % j === 0) {
      divisors.push(j);
    }
  }

  let sumOfDivisors = divisors.reduce((acc, cur) => acc + cur, 0);

  if (sumOfDivisors === number) {
    console.log(`${number} = ${divisors.join(" + ")}`);
  } else {
    console.log(`${number} is NOT perfect.`);
  }
}
