function solution(my_str, n) {
    var answer = [];
    let cnt = 0;
    for(let i=cnt; i<my_str.length; i=cnt){
        answer.push(my_str.substr(cnt,n));
        cnt = cnt + n;
    }
    return answer;
}