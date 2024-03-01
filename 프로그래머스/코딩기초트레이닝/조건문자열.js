function solution(ineq, eq, n, m) {
    var answer = 0;
    if(eq == '!'){
        console.log(n+ineq+m);
        if(ineq == '>') {
            if( n > m ) answer = 1;
            else answer = 0;
        } else {
            if( n < m ) answer = 1;
            else answer = 0;
        }
    } else {
        console.log(n+ineq+eq+m);
        if(ineq == '>') {
            if( n >= m ) answer = 1;
            else answer = 0;
        } else {
            if( n <= m ) answer = 1;
            else answer = 0;
        }
    }
    console.log(answer);
    return answer;
}