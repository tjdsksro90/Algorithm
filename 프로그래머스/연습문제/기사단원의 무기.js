// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
      let count = 0;
      // i의 약수 개수를 구하는 루프
      for (let j = 1; j * j <= i; j++) {
          if (i % j === 0) {
              count++; // j는 약수
              if (j * j != i) {
                  count++; // i / j도 약수
              }
          }
      }
      // 제한 수치를 초과하는 경우
      if (count > limit) {
          answer += power;
      } else {
          answer += count;
      }
  }

  return answer;
}