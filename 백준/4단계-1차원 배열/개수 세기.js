const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//
const total = n;
const list = arr[0].replace(/\r/g,"").split(' ').map(Number);
const item = arr[1];
let result = 0;

for(var i=0; i<total; i++){
    if(list[i]==item){
        result += 1;
    }
}

console.log(result);