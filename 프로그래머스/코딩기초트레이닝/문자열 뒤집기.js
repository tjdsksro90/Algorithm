function solution(my_string, s, e) {
  let sliceItem = [...my_string.slice(s, e + 1)].reverse().join("");

  return (
    my_string.slice(0, s) + sliceItem + my_string.slice(e + 1, my_string.length)
  );
}
