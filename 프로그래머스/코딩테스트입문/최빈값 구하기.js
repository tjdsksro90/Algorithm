function solution(array) {
  var answer = 0;

  let obj = {};

  array.forEach(num => {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  });

  let highValue = 0;
  let highValueKey = 0;

  for (let key in obj) {
    const value = obj[key];
    if (value > highValue) {
      highValue = value;
      highValueKey = Number(key);
    }
  }

  // 객체 내에서 가장 최고값의 value 찾기
  const maximum = Math.max(...Object.values(obj));

  // 최대값의 value를 가지고 있는 key(들)로 배열 생성. 즉 최빈값(들)을 담고 있는 새 배열 생성
  const mode = Object.keys(obj).filter(el => obj[el] === maximum);

  return mode.length === 1 ? highValueKey : -1;
}
