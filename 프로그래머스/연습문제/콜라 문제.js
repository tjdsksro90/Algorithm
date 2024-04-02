function solution(a, b, n) {
    var answer = 0;
    let result = n;
    while(true){
        answer += Math.floor(result/a)*b;
        result = Math.floor(result/a)*b + result%a;
        if(result < a) break;
    }
    return answer;
}