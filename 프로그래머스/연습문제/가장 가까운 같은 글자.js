function solution(s) {
    var answer = [];
    let check = [];
    for( let i = 0; i < s.length; i++){
        if(!check.includes(s[i])) {
            answer.push(-1);
            check.push(s[i])
        } else if (check.includes(s[i])){
            // 가장 나중에 들어온 문자 위치 체크
            answer.push( i - check.lastIndexOf(s[i]));
            check.push(s[i])
        }
    }
    
    return answer;
}