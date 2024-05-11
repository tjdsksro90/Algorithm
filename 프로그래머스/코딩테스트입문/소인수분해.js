function solution(n) {
  let answer = [];

  let divisor = 2; // 소인수분해가 되는 가장 작은 값인 2

  while (n >= 2) {
    if (n % divisor === 0) {
      answer.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return [...new Set(answer)];
}
