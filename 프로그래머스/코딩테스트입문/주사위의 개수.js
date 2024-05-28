function solution(box, n) {
  return box.reduce((acc, cur, idx) => {
    acc *= Math.floor(cur / n);
    return acc;
  }, 1);
}
