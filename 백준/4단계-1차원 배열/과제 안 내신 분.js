const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = [];
const listNum = input.map(Number);


for(var i=1; i <= 30; i++){
    if(!(listNum.includes(i))){
        list.push(i);
    }
}

const result = list.join('\n');

console.log(result);