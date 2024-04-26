function solution(array, n) {
  let newArr = new Array(array.length).fill(0);
  let answerArr = [];

  for (let i = 0; i < array.length; i++) {
    newArr[i] = Math.abs(n - array[i]);
  }

  let minNum = Math.min(...newArr);

  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] === minNum) answerArr.push(array[j]);
  }

  return answerArr.sort()[0];
}
