function solution(a, b) {
    var answer = 0;
    if ( b > a ) {
        for( let i=a; i<=b; i++){
            answer += i;
        }
    } else if ( a > b ) {
        for( let i=b; i<=a; i++){
            answer += i;
        }
    } else {
        // if( a == b) 
        answer = a;
    }
    return answer;
}