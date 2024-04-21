function solution(rank, attendance) {
  let arr = [];

  for (let i = 1; i <= rank.length; i++) {
    let check = rank.indexOf(i);
    if (attendance[check]) arr.push(check);
  }

  return 10000 * arr[0] + 100 * arr[1] + arr[2];
}
