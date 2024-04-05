function solution(x) {
    let result = x.toString().split('').map(num=>Number(num)).reduce((acc,val)=>acc+val,0);
    let answer = Number.isInteger(x/result);
    return answer;
}