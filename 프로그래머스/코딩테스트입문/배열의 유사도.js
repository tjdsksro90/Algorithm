function solution(s1, s2) {
    var answer = 0;
    s1.filter(item => s2.includes(item) ? answer++ : answer)
    return answer;
}