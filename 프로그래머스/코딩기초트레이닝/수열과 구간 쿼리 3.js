function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let item = arr[queries[i][0]];
    arr[queries[i][0]] = arr[queries[i][1]];
    arr[queries[i][1]] = item;
  }
  return arr;
}
