function solution(my_string, is_suffix) {
  const list = [...my_string].reduce((acc, cur, idx, arr) => {
    const original = arr.join("");

    acc = [...acc, original.slice(idx)].sort();

    return acc;
  }, []);

  return list.filter(item => item === is_suffix).length > 0 ? 1 : 0;
}
