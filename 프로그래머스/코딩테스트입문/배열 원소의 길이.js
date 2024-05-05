function solution(strlist) {
    var answer = [];
    strlist.forEach((num,idx) => answer.push(strlist[idx].length))
    return answer;
}