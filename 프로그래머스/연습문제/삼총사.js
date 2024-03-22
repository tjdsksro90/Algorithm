function solution(number) {
    var answer = 0;
    const len = number.length; // 5
    
    for(let a = 0; a < len; a++){
        for (let b = a + 1; b < len; b++){
            for ( let c = b + 1; c < len; c++){
                if( number[a] + number[b] + number[c] === 0) answer++
            }
        }
    }
    
    return answer;
}