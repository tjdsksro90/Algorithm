function solution(binomial) {
    var answer = 0;
    if(binomial.split(' ')[1] === '+'){
        return Number(binomial.split(' ')[0]) + Number(binomial.split(' ')[2])
    } else if (binomial.split(' ')[1] === '-') {
        return Number(binomial.split(' ')[0]) - Number(binomial.split(' ')[2])
    } else if (binomial.split(' ')[1] === '*') {
        return Number(binomial.split(' ')[0]) * Number(binomial.split(' ')[2])
    } else {
        return Number(binomial.split(' ')[0]) / Number(binomial.split(' ')[2])
    }
}