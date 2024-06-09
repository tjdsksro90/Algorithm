function solution(n) {
  var answer = 1;

  let i = 1;

  while (true) {
    answer = answer * i;
    if (n === answer) return i;
    else if (answer > n) return i - 1;
    i++;
  }

  return answer;
}
