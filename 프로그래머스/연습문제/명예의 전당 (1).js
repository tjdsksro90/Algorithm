function solution(k, score) {
  var answer = [];
  let list = [];

  for (let i = 0; i < score.length; i++) {
    list.push(score[i]);
    if (list.length > k) list = list.sort((a, b) => b - a).slice(0, -1);

    const min = Math.min(...list);
    const minIndex = list.indexOf(min);

    answer.push(min);
  }
  return answer;
}
