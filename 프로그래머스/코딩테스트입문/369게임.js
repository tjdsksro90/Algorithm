function solution(order) {
  let word = "369";
  let list = [...order.toString()];

  return list.filter(el => word.includes(el)).length;
}
