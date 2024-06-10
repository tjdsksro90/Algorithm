function solution(n) {
  let answer = 0;
  // n까지 반복
  for (let i = 1; i <= n; i++) {
    // 약수 구하기
    let index = 1;
    let arr = [];

    while (index <= i / 2) {
      if (i % index === 0) arr.push(index);
      index++;
      arr = [...arr, i]; // 본인 값 추가까지 추가
    }
    let arrayLength = [...new Set(arr)];
    // 3개 이상이 합성수라 그때부터 체크
    if (arrayLength.length > 2) answer++;
  }

  return answer;
}
