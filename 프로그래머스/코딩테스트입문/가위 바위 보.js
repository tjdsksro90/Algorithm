function solution(rsp) {
  let answer = "";
  const rspArr = [...rsp];

  for (let i = 0; i < rspArr.length; i++) {
    rspArr[i] === "2"
      ? (answer += "0")
      : rspArr[i] === "0"
      ? (answer += "5")
      : (answer += "2");
  }

  return answer;
}
