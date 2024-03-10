let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split('\n');


for(let i = 0; i < input.length; i++){
    if(input[i].split(' ')[1] !== undefined){
        let answer = '';

        for(let j = 0; j < input[i].split(' ')[1].length; j++){
            answer += input[i].split(' ')[1][j].repeat(input[i].split(' ')[0]);
        }
        console.log(answer)
    }
}
