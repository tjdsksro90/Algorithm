function solution(arr, queries) {
  let answer = new Array(queries.length).fill(0);
  for (let i = 0; i < queries.length; i++) {
    let newArr = [];
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (queries[i][2] < arr[j]) {
        newArr.push(arr[j]);
      }
    }
    newArr.length === 0 ? (answer[i] = -1) : (answer[i] = Math.min(...newArr));
  }
  return answer;
}
