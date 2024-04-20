function solution(picture, k) {
  let result = [];

  picture.map(item => {
    const cur = [...item].map(x => x.repeat(k)).join("");
    for (let i = 0; i < k; i++) result.push(cur);
  });

  return result;
}
