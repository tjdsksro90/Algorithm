function solution(num, k) {
    var answer = -1;
    for(let i=0; i<num.toString().split("").length; i++){
        if(Number(num.toString().split("")[i]) === k) return answer = i + 1;
    }
    return answer;
}