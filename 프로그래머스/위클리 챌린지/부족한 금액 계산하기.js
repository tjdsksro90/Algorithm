function solution(price, money, count) {
    let answer = 0;
    for( let i=1; i<=count; i++) {
        answer += price * i;
    }
    let less = answer - money;
    
    return Math.sign(less) === 1 ? less : 0;
}