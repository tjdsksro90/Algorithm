function solution(arr, k) {
  let newArr = new Array(k).fill(-1);
  let filter = [...new Set(arr)].slice(0, k);

  for (let i = 0; i < k; i++) {
    if (filter[i] === undefined) break;
    newArr[i] = filter[i];
  }

  return newArr;
}
