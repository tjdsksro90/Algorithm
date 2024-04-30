function solution(my_string) {
    var answer = '';
    const result = [...my_string];
    for(let i of result) i === i.toLowerCase() ? answer += i.toUpperCase() : answer += i.toLowerCase();
    return answer;
}