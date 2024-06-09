function solution(dots) {
  // 시작하기전, 직선이 평행하다는 것은 두 지석의 기울기가 같다는 것
  // 직선의 기울기 = y값의 변화량 / x값의 변화량
  const [a,b,c,d] = dots;
  
  if(slash(a,b) === slash(c,d)) return 1;
  if(slash(a,c) === slash(b,d)) return 1;
  if(slash(a,d) === slash(b,c)) return 1;
  return 0;
}

// 기울기 계산함수
function slash(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}