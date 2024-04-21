function solution(arr) {
  const outerLen = arr.length;
  const innerLen = arr[0].length;

  if (outerLen > innerLen) {
    const newArr = new Array(outerLen - innerLen).fill(0);
    return arr.map(el => [...el, ...newArr]);
  }

  if (arr[0].length > outerLen) {
    for (let i = 0; i < innerLen - outerLen; i++) {
      const newArr = new Array(innerLen).fill(0);
      arr.push(newArr);
    }
  }

  return arr;
}
