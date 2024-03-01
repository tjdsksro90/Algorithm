function solution(numLog) {
    var answer = '';
    for( var i = 0; i < numLog.length - 1; i++){
        if(numLog[i] == numLog[i+1] - 1) answer += 'w';
        else if(numLog[i] == numLog[i+1] + 1) answer += 's';
        else if(numLog[i] == numLog[i+1] - 10) answer += 'd';
        else answer += 'a';
    }
    console.log(answer);
    return answer;
}