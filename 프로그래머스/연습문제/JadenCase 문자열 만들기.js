function solution(s) {
    let low = s.toLowerCase();
    let answer = low.replace(/\b[a-z]/g, first => first.toUpperCase());
    
    return answer;
}