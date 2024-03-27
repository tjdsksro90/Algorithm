function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = '';
    
    for( let i = 0; i < s.length; i++){
        if(lower.includes(s[i])){
            answer += lower[lower.indexOf(s[i]) + n]
        } else if(upper.includes(s[i])) {
            answer += upper[upper.indexOf(s[i]) + n]
        } else {
            answer += ' '
        }
    }
    
    return answer;
}