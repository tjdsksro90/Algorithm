function solution(a, b) {
  // a를 b로 나눈 수를 소수점 아래 10의 자리만큼 표기한 후 Number 타입으로 변환한다.
  // 이때 변환한 값과 a를 b로 나눈 수가 같다면 유한소수이므로 1,
  // 아니라면 무한소수이므로 2를 리턴한다.
  return Number((a/b).toFixed(10)) == a/b ? 1 : 2
}

// 다른 풀이
function solution(a, b) {
  // 최대공약수로 나누고
  // 2, 5로 계속 나눠서 1인지 확인
  let n = 1;
  
  for (let i = 1; i <= Math.min(a,b); i++) {
      if (a%i===0 && b%i===0) n = i;
  }

  b/=n; // b = b / n
  
  while (b%2===0) b/=2; // b = b / 2
  while (b%5===0) b/=5; // b = b / 5
  
  return b === 1 ? 1 : 2;   
}