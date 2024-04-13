function solution(numbers, n) {
  let answer = 0;
  let result = 0;
  numbers.forEach(num => {
    if (answer > n) return false;
    answer += num;
    result = answer;
  });
  return result;
}
