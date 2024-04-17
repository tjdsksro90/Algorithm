function solution(strArr) {
  let obj = {};

  for (let i of strArr) {
    obj[i.length] = obj[i.length] ?? [];
    obj[i.length].push(i);
  }

  const values = Object.values(obj).map(a => a.length);

  return Math.max(...values);
}
