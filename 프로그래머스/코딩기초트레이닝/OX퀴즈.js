function solution(quiz) {
    var answer = [];
    for(let i of quiz) {
        if(i.split(' ')[1] === '+'){
            if(BigInt(i.split(' ')[0]) + BigInt(i.split(' ')[2]) === BigInt(i.split(' ')[4])){
                answer.push('O')
            } else {
                answer.push('X')
            }
        } else {
            if(BigInt(i.split(' ')[0]) - BigInt(i.split(' ')[2]) === BigInt(i.split(' ')[4])){
                answer.push('O')
            } else {
                answer.push('X')
            }
        }
    }
    return answer;
}