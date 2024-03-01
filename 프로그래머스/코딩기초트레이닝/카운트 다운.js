function solution(start, end_num) {
    var answer = [];
    for( var i = 0; i<50; i++) {
        if( start-i >= end_num) answer.push(start-i);
    }
    return answer;
}