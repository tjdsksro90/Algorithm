function solution(n, k) {
    var answer = 0;
    let food = 12000;
    let drink = 2000;
    
    answer = (food * n) + (drink * k) - (Math.floor(n/10) * drink);
    
    return answer;
}