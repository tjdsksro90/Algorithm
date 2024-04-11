function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    let item = my_string.slice(s, e + 1);
    my_string =
      my_string.slice(0, s) +
      item.split("").reverse().join("") +
      my_string.slice(e + 1);
  }
  return my_string;
}
