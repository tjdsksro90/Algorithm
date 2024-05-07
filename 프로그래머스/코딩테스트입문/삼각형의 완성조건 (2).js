function solution(sides) {
  let count = 0;
  const sortSides = sides.sort((a, b) => b - a);

  for (let i = sortSides[0]; i <= sortSides[0]; i--) {
    if (sortSides[1] + i <= sortSides[0]) break;
    count += 1;
  }

  for (let j = sortSides[0] + 1; j < sortSides[0] + sortSides[1]; j++) {
    count += 1;
  }

  return count;
}
