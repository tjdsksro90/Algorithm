function solution(num_list) {
  let empty = 0;

  for (let i = 0; i < num_list.length; i++) {
    let num = num_list[i];
    if (Math.sign(num) === -1) {
      return i;
    } else {
      empty++;
    }
    if (empty === num_list.length) return -1;
  }
}
