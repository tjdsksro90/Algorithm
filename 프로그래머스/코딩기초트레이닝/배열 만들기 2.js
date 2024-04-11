function solution(l, r) {
  let answer = [];

  for (let i = l; i <= r; i++) {
    let newArr = [...i.toString()];
    if (!newArr.every(x => x === "5" || x === "0")) continue;
    answer.push(i);
  }

  return answer.length === 0 ? (answer = [-1]) : answer.sort((a, b) => a + b);
}
