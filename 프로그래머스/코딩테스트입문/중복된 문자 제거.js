function solution(my_string) {
  var answer = "";
  let list = [...my_string];

  let obj = {};

  list.forEach(key => {
    if (!obj[key]) {
      obj[key] = 1;
      answer += key;
    }
  });

  return answer;
}
