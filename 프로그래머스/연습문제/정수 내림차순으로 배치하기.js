function solution(n) {
    var answer = Number([...String(n)].map(Number).sort(function(a,b){ return b-a}).join(''));
    console.log(answer);
    return answer;
}