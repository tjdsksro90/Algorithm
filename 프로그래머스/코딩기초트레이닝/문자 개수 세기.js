function solution(my_string) {
  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let answer = new Array(52).fill(0);

  my_string.split("").map(n => {
    answer[al.indexOf(n)] += 1;
  });

  return answer;
}
