function solution(arr1, arr2) {
  var answer = 0;
  if (arr1.length === arr2.length) {
    let a = arr1.reduce((acc, cur) => acc + cur);
    let b = arr2.reduce((acc, cur) => acc + cur);
    return a === b ? 0 : a > b ? 1 : -1;
  } else {
    return arr1.length > arr2.length ? 1 : -1;
  }
}
