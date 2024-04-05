function solution(myString) {
    var answer = [];
    for (let i of myString.split('x')) {
        answer.push(i.length)
    }
    return answer;
}