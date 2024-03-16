function solution(k, m, score) {
    var answer = 0;
    // 내림차순 정렬
    score.sort((a,b)=> b-a)
    
    for(var i=0; i<score.length; i+=m) {
        // m 개씩 나누기
        let sliceItem = score.slice(i, i+m)
        // m 개씩 나누어 진 것만 최소값 * m
        if(sliceItem.length === m) answer += m * sliceItem[sliceItem.length-1];
    }
    
    return answer;
}