function solution(balls, share) {
  // 재귀함수
  //     const factori = (n) => {
  //         if( n === 0 || n === 1 ) return 1;
  //         return n * factori(n - 1)
  //     }

  //     const n = factori(balls)
  //     const m = factori(share)
  //     const nm = factori(balls - share)

  //     return Math.round( n / ( nm * m ))

  // while문 share가 0이 될 때까지
  let answer = 1;
  while (share) {
    answer *= balls / share;
    balls--;
    share--;
  }
  return Math.round(answer);
}
