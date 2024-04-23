function solution(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let newArr = new Array(n).fill(0);
    newArr[i] = 1;
    answer.push(newArr);
  }
  return answer;
}
