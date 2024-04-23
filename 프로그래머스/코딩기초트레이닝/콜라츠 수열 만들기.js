function solution(n) {
  var answer = [];
  let i = 0;
  answer.push(n);
  while (i !== 1) {
    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
    answer.push(n);
    if (n === 1) break;
  }
  return answer;
}
