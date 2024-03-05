const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
//
const list = ['int'];

for(var i=1; i <= input; i++){
    if( i % 4 == 0){
        const longStr = 'long '
        list.unshift(longStr);
    }
}

const result = list.join('');

console.log(result);