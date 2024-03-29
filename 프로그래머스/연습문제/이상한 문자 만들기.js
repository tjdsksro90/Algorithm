function solution(s) {
    var answer = s.split(' ');
    const result = new Array()
    for( let i = 0; i < answer.length; i++){
        result.push([])
        for( let j = 0; j < answer[i].length; j++) {
            if(j % 2 === 0){ 
                result[i] += answer[i][j].toUpperCase()
            } else {
                result[i] += answer[i][j].toLowerCase()
            }
        }
    }
        return result.join(' ');
}