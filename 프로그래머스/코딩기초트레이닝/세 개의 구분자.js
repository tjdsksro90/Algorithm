function solution(myStr) {
  const list = myStr.split(/[a|b|c]/).filter(str => str);
  return list.length ? list : ["EMPTY"];

  //     let arr = [...myStr]
  //     let word =  ''

  //     for(let i = 0; i < myStr.length; i++){
  //         if((myStr[i] === 'a') || (myStr[i] === 'b') || (myStr[i] === 'c')) word += ','
  //         else word += myStr[i]
  //     }

  //     return word.split(',').filter(el => el).length > 0 ? word.split(',').filter(el => el) : ["EMPTY"];
}
