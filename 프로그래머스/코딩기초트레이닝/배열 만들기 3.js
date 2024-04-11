function solution(arr, intervals) {
  var answer = [];
  for (let i of intervals) {
    answer.push(...arr.slice(i[0], i[1] + 1));
  }
  return answer;
}
