function solution(n, m) {
    var answer = [];
    let min = Math.min(n,m)
    let max = Math.max(n,m)
    //유클리드 호제법
    //최대공약수 - 2부터 min(a,b)까지 모든 정수를 나눈 후 가장 큰 정수
    const gcd = (a,b) => a % b === 0 ? b : gcd(b,a % b);
    //최소공배수 - 공통인 배수 중 가장 작은 수
    const lcm = (a,b) => a * b / gcd(a,b);
    return [gcd(min, max), lcm(min,max)]
    
}
