function solution(emergency) {
  let copyArr = [...emergency].sort((a, b) => b - a);
  let rankArr = new Array(emergency.length).fill(0);

  let count = 1;

  for (let i = 0; i < emergency.length; i++) {
    let index = emergency.indexOf(copyArr[i]);
    rankArr.splice(index, 1, count);
    count++;
  }
  return rankArr;
}
