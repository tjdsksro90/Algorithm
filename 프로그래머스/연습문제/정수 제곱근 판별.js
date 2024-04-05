function solution(n) {
    var answer = 0;
    var num = Math.sqrt(n);
    var trueFalse = Number.isInteger(num);
    
    if (trueFalse) answer = Math.pow(num + 1, 2);
    else answer = -1;
    
    console.log(answer);
    return answer;
}