function solution(arr) {
  let list = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) list.push(i);
  }
  if (list.length < 1) return [-1];
  else return arr.slice(list[0], list[list.length - 1] + 1);
}
