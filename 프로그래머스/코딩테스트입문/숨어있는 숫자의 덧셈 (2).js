function solution(my_string) {
  const matchNum = my_string.match(/\d+/g);

  if (!matchNum) return 0;

  return matchNum.reduce((acc, cur) => acc + parseInt(cur), 0);
}
