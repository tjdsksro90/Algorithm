function solution(sides) {
  const sortNum = sides.sort();
  return sortNum[0] + sortNum[1] > sortNum[2] ? 1 : 2;
}
