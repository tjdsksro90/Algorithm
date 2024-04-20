function solution(arr, delete_list) {
  delete_list.forEach(item => {
    arr = arr.filter(el => item !== el);
  });

  return arr;
}
