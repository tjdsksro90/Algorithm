function solution(numer1, denom1, numer2, denom2) {
  let answer = [];

  // 분자 구하기
  let a = numer1 * denom2 + numer2 * denom1;
  // 분모 구하기
  let b = denom1 * denom2;

  // 최소공약수 구하기
  // 1. a, b 나눈다. 만약 나누어진다면 b 최대 공약수이다 (a > b)
  // 2. 서로가 나누어지지 않는다면 b와 a % b (a를 b로 나눈 나머지)로 다시 나눈다.
  // 3. 서로가 나누어진다면 a % b가 최대 공약수이다.
  // 4. 만약 나누어지지 않는다면 2,3번 방법 반복

  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  //최소 공약수를 분자 분모에 누눈 후 배열에 넣기
  answer[0] = a / gcd(a, b);
  answer[1] = b / gcd(a, b);

  return answer;
}

// 간단 정리
// 최대 공약수 구하기
// function cal_gcd(a, b) {
//     return a % b === 0 ? b : cal_gcd(b, a % b)
// }

// function solution(numer1, denom1, numer2, denom2) {
//     let denum = numer1 * denom2 + numer2 * denom1;
//     let num = denom1 * denom2;
//     let gcd = cal_gcd(denum, num);

//     // 최대 공약수를 분자 분모에 나누고 배열에 넣기
//     return [denum / gcd, num / gcd]
// }
