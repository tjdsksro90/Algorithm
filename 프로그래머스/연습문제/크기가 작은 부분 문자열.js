function solution(t, p) {
    var answer = 0;
    
    let i = 0;
    while(true){
        const pair = t.slice(i, i + p.length);
        if(pair.length < p.length) break;
        if(Number(pair) <= Number(p)) answer++;
        i++
    }
    return answer;
}