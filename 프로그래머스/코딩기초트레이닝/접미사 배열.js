function solution(my_string) {
  return [...my_string].reduce((acc, cur, idx, arr) => {
    const original = arr.join("");

    acc = [...acc, original.slice(idx)].sort();

    return acc;
  }, []);
}
