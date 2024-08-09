function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const sim = Math.abs(a - n) - Math.abs(b - n);
    return sim === 0 ? b - a : sim;
  });
}
// function solution(numlist, n) {
//   return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
// }
