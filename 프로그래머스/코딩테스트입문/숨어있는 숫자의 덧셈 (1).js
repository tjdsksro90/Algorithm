function solution(my_string) {
  let answer = 0;

  const filterArr = [...my_string].filter(x => !isNaN(Number(x)));

  for (let i of filterArr) {
    answer += Number(i);
  }

  return answer;
}
