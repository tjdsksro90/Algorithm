function solution(number) {
  let item = number.split("");

  const sum = item.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);

  return sum % 9;
}
