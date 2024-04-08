function solution(arr, query) {
  query.forEach((e, i) => {
    if (i % 2 === 0) arr = arr.filter((_, item) => item <= e);
    else arr = arr.filter((_, item) => item >= e);
  });
  return arr;
}
