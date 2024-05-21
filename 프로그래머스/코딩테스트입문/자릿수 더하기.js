function solution(n) {
    var answer = 0;
    var list = [...String(n)];
    list.forEach((e) => answer += Number(e));
    return answer;
}