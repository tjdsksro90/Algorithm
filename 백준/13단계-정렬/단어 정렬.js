let fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");

// 1181번

// 단어 정렬

// 풀이
input.shift()
const newArr = [...new Set(input)];

newArr.sort((a, b) => {
    //길이가 짧은것 부터 정렬
    if (a.length != b.length) {
        return a.length - b.length;
    } else {
        //길이가 같은 경우 사전순으로 정렬
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    }
});

for (let word of newArr) {
    console.log(word);
}