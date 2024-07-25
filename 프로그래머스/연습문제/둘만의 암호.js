function solution(s, skip, index) {
  let codes = Array(26).fill().map((v, i) => String.fromCharCode(i + 97)).filter(c => !skip.includes(c));
  let answer = s.split("").map((a)=> {
      return codes[(codes.indexOf(a) + index) % codes.length]
  }).join("")

  return answer;
}