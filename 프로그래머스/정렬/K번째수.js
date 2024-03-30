function solution(array, commands) {
    var answer = [];
    // array에 두자릿수 숫자가 들어오면 통과 못함 
    // sort method가 완벽한 정렬을 해주지는 않습니다. 테스트 2번!
    for( let i = 0; i < commands.length; i++ ) {
        let result = array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)
        answer.push(result[commands[i][2]-1])
    }
    return answer;
}
