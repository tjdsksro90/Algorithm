function solution(citations) {
  let answer = 0;
  let arr = [];

  citations = citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    // 큰수부터 추가
    arr.push(citations[i]);
    // 추가된 배열이 해당 수보다 작을땐 제외
    if (citations[i] < arr.length) {
      break;
    }
    answer++;
  }

  return answer;
}
