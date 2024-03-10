let fs = require('fs');
const file = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = fs.readFileSync(file).toString().trim()

// 5622

// digital[i] == 다이얼 숫자 1을 걸려면 2초 ~ 그다음부터 1초씩증가 숫자는 (1,2,3,4,5,6,7,8,9,0) 순서
// 문자는 각해당하는 숫자번호로 눌러야됨  1,2(abc),3(def),4(ghi),5(jkl),6(mno),7(pqrs),8(tuv),9(wxyz),0
// 문자에 해당하는 숫자로 전화를 걸 경우 최소시간 구하기

// 풀이
//1. 알파벳과 숫자 쌍을 객체로 만들기
//2. 해당 객체에서 문자 검색
//3. 키값을 출력하여 더하기
//4. for...in  문을 통하여 객체 문자열 반복, inlcudes()함수를 통하여 입력 값이 있는지 확인

const number = {
    ABC: 3,
    DEF: 4,
    GHI: 5,
    JKL: 6,
    MNO: 7,
    PQRS: 8,
    TUV: 9,
    WXYZ: 10
};

const digital = input;

let sum = 0;

for ( let i = 0; i < digital.length; i++) {
    for ( let word in number){
        if(word.includes(digital[i])) {
            sum += number[word]
        }
    }
}

console.log(sum);