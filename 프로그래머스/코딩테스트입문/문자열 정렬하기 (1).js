function solution(my_string) {
  let answer = [];

  const numMyStr = [...my_string];

  for (let i of numMyStr) {
    if (!isNaN(Number(i))) answer.push(Number(i));
  }

  return answer.sort();
}
