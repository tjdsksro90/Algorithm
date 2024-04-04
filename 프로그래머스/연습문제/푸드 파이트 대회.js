function solution(food) {
    var answer = '';
    let array = food;
    let num = '';
    for(let i=1; i<food.length; i++){
        if(Number(food[i] > 1)) {
            if(Number(food[i]) % 2 !== 0) {
                num = (Number(food[i]) - 1 ) / 2
                answer += `${i}`.repeat(num)
            } else {
                num = (Number(food[i])) / 2
                answer += `${i}`.repeat(num)
            }
        }
        
    }
    
    const zero = '0';
    const reverse = answer.split('').reverse().join('')
    return answer + zero + reverse;
}