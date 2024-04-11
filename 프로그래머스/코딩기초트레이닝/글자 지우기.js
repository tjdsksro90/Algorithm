function solution(my_string, indices) {
  let slicer = indices.sort((a, b) => b - a);

  for (let i = 0; i < slicer.length; i++) {
    my_string = [...my_string].filter((el, idx) => slicer[i] !== idx);
  }

  return my_string.join("");
}
