const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

result(a, b, c)

function result(a, b, c) {
    let result = 0;

    if (a == b && b == c) {
        // a,b,c 같을 때
        result = 10000 + a * 1000
    } else if (a == b) {
        result = 1000 + a * 100
    } else if (b == c) {
        result = 1000 + b * 100
    } else if (c == a) {
        result = 1000 + c * 100
    } else {
        if (a > b && a > c) {
            result = a * 100
        } else if (b > c && b > a) {
            result = b * 100
        } else if (c > a && c > b) {
            result = c * 100
        }
    }

    console.log(result);
}