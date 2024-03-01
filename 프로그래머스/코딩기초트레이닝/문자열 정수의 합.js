function solution(num_str) {
    var answer = 0;
    answer = [...num_str].reduce((a,b) => Number(a) + Number(b),0);
    
    return answer;
}