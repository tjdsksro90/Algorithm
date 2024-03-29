function solution(a, b) {
    var answer = 0;
    for(let i=0; i<b.length; i++){
        answer += a[i] * b[i]; 
    }
    return answer;
}