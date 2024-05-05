function solution(my_string) {
    let my = my_string.split(' ')
    let answer = Number(my[0]);
    for(let i=1; i < my.length; i+=2) my[i] === '+' ? answer += Number(my[i+1]) : answer -= Number(my[i+1])
    return answer;
}