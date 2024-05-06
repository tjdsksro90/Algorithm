function solution(numbers, direction) {
  var answer = [];
  if (direction === "right") {
    const sliceRight = numbers.slice(numbers.length - 1, numbers.length);
    const sliceList = numbers.slice(0, numbers.length - 1);
    answer.push(...sliceRight, ...sliceList);
  } else {
    const sliceRight = numbers.slice(0, 1);
    const sliceList = numbers.slice(1, numbers.length);
    answer.push(...sliceList, ...sliceRight);
  }
  return answer;
}
