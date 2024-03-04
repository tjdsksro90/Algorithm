const fs = require('fs');
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

//
const total  = n; // 총액
const num = arr[0]; // 갯수

let list = [];
let realResult = 0;

for(var i=1; i <= num; i++){
    const result = arr[i].split(" ").map(Number);
    realResult = result[0]*result[1];
    list.push(realResult)
}

let acc = list.reduce((a,b)=>(a+b));

if(total == acc){
    console.log('Yes');
} else {
    console.log('No')
}