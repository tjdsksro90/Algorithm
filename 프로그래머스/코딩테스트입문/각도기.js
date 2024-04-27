function solution(angle) {
    var answer = 0;
    // 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4
    if( 0 < angle && angle < 90 ) answer = 1;
    else if ( angle == 90 ) answer = 2;
    else if ( 90 < angle && angle < 180 ) answer = 3;
    else answer = 4
    
    return answer;
}