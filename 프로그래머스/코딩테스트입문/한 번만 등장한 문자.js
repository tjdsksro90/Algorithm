function solution(s) {
  var answer = "";

  let sortWord = [...s].sort();

  for (let i = 0; i < sortWord.length; i++) {
    let cnt = sortWord.filter(el => el === sortWord[i]).length;
    let pick = sortWord.filter(el => el === sortWord[i]);

    if (cnt === 1) answer += pick;
  }

  return answer;
}
