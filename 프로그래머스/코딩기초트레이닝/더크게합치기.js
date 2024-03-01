function solution(a, b) {
    var answer = 0;
    var numA = String(a) + String(b);
    var numB = String(b) + String(a);
    
    if( Number(numA) < Number(numB) ) {
        answer = String(b) + String(a);
    } else {
        answer = String(a) + String(b);
    }
    console.log(answer);
//     const atob = String(a) + String(b)
//     const btoa = String(b) + String(a)
    
//     return atob >= btoa ? Number(atob) : Number(btoa)
    return Number(answer);
}