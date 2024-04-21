function solution(myString, pat) {
    var answer = 0;
    if(myString.toLowerCase().includes(pat.toLowerCase())) return answer = 1;
    else return answer = 0;
}