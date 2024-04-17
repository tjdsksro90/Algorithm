function solution(intStrs, k, s, l) {
  var answer = [];
  for (let i of intStrs) {
    if (Number(i.slice(s, s + l)) > k) answer.push(Number(i.slice(s, s + l)));
  }
  return answer;
}
