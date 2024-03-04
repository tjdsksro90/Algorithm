let input = require("fs").readFileSync("/dev/stdin").toString();

const n = Number(input[0]);

for (var number = 1; number < 10; number++) {
    console.log(n+' * '+number+' = '+n*number);
}