function solution(s) {
  let answer = 0;
  let beforeNum = 0;

  let numArr = s.split(" ");

  for (let i of numArr) {
    if (i !== "Z") {
      answer += Number(i);
      beforeNum = Number(i);
    } else {
      answer -= beforeNum;
    }
  }

  return answer;
}
