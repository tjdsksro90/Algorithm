function solution(babblings) {
  const joka = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  babblings.forEach(babbling => {
    let charList = [...babbling];

    let checkBabbling = "";
    let prevBabbling = "";

    // 글자 하나씩 쪼개서 더해가며 반복문
    while (charList.length) {
      // 앞 순서 한글자씩 문자열 합치기
      checkBabbling += charList.shift();

      // 글자가 동일할때 접근
      if (joka.includes(checkBabbling)) {
        // 문제에 연속적으로 발음하지 못한다고 해서 if문 추가
        if (prevBabbling !== checkBabbling) {
          prevBabbling = checkBabbling;
          checkBabbling = "";
        }
      }
      console.log(checkBabbling);
    }

    // 최종적으로 단어가 빈값이면 알맞은거므로 카운팅
    if (checkBabbling === "") {
      answer++;
    }
  });

  return answer;
}
