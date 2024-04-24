function solution(i, j, k) {
  var answer = 0;

  for (let n = i; n <= j; n++) {
    if (n.toString().includes(k.toString()))
      answer += n
        .toString()
        .split("")
        .filter(str => str === k.toString()).length;
  }

  return answer;
}
