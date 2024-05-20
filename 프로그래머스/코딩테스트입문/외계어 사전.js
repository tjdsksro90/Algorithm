function solution(spell, dic) {
  let result = "";

  for (let i of dic) {
    result = i;
    for (let j of spell) {
      result = result.replace(j, "");
      if (result.length === 0 && i.length === spell.length) return 1;
    }
  }

  return 2;

  // return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;
}
