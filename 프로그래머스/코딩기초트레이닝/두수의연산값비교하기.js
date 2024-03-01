function solution(a, b) {
    var answer = 0;
    let resultA = Number(String(a) + String(b));
    let resultB = 2 * a * b;
    
    if(resultA >= resultB) return resultA;
    else return resultB;
}