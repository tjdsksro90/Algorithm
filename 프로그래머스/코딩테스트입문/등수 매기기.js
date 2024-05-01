function solution(score) {
  let arr = new Array(score.length).fill(1);
  const floor = score.map(num => (num[0] + num[1]) / 2);

  for (let i = 0; i < floor.length; i++) {
    for (let j = 0; j < floor.length; j++) {
      if (floor[i] < floor[j]) arr[i]++;
    }
  }

  return arr;
}
