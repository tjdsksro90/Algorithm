function solution(s) {
    let strings = s;
    let removeNum = 0;
    let repeatNum = 0;
    
    for(let i=0; i<s.length; i++){
        if(strings.includes('0')) {
            strings = strings.replace('0','');
            removeNum++;
        } else {
            strings = strings.length.toString(2) // 변환
            if(strings !== '1') repeatNum++;
        }
    }
    
    return [repeatNum + 1, removeNum];
}