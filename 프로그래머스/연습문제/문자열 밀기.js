function solution(A, B) {
  let answer = 0;
  let listA = [...A];
  let listB = [...B];

  if (A === B) return 0;

  for (let i = 0; i < B.length; i++) {
    let pop = listA.pop();
    listA.unshift(pop);
    answer += 1;
    if (listA.join('') === listB.join('')) return answer;
  }

  return -1;
}
