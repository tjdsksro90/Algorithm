function solution(arr) {
  var answer = [];
  let newArr = new Array(2).fill(0);

  let i = 2;
  while (true) {
    if (arr.length > newArr.length) {
      for (let j = 0; j < i; j++) newArr.push(0);
      i = i * 2;
    } else break;
  }

  arr.forEach((num, idx) => (newArr[idx] = num));

  return arr.length === 1 ? arr : newArr;
}
