function solution(before, after) {
  let arrBefore = [...before]
  let stringAfter = after;
  
  arrBefore.forEach((item,idx)=> { stringAfter = stringAfter.replace(item, '')})
  
  return stringAfter.length === 0 ? 1 : 0;
}