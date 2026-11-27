function solution(X, Y) {
  const result = [];
  // 0~9까지 숫자의 개수를 저장할 배열을 생성합니다.
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);
  
  console.log(countX)

  // 1. X에 포함된 0~9 숫자의 개수를 셉니다.
  for (const char of X) {
      countX[parseInt(char)]++;
  }

  // 2. Y에 포함된 0~9 숫자의 개수를 셉니다.
  for (const char of Y) {
      countY[parseInt(char)]++;
  }
  
      console.log(countX)

  // 3. 가장 큰 숫자인 '9'부터 '0'까지 순회하며 공통 짝꿍을 찾습니다.
  for (let i = 9; i >= 0; i--) {
      // 두 문자열에 공통으로 나타나는 횟수를 구합니다. (더 적은 쪽)
      const commonCount = Math.min(countX[i], countY[i]);
      
      // 공통된 횟수만큼 숫자를 결과 문자열에 추가합니다.
      // repeat()를 사용하면 반복문을 쓰지 않고 간단하게 처리할 수 있습니다.
      result.push(String(i).repeat(commonCount));
  }

  // 결과 배열을 하나의 문자열로 합칩니다.
  const answer = result.join('');

  // 4. 최종 결과에 대한 예외 처리를 합니다.
  // 공통된 숫자가 하나도 없는 경우
  if (answer === '') {
      return "-1";
  }
  
  // 공통된 숫자가 '0'뿐인 경우 (예: X="10", Y="20" -> "0")
  if (Number(answer) === 0) {
      return "0";
  }
  
  // 그 외의 경우, 만들어진 가장 큰 수를 반환합니다.
  return answer;
}
