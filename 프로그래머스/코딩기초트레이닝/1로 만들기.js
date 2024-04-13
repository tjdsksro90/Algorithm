function solution(num_list) {
  var answer = 0;
  num_list.forEach((item, index) => {
    let i = item;
    while (i) {
      if (i === 1) break;
      else {
        if (i % 2 === 0) i = i / 2;
        else if (i % 2 !== 0) i = (i - 1) / 2;
        answer++;
      }
    }
  });

  return answer;
}
