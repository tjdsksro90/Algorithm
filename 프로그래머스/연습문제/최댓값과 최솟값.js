function solution(s) {
    const choice = s.split(' '); // ['1','2','3','4']
    const selected = choice[0]; // ['1']
    const left = choice.reduce((acc,cur)=> Number(acc) > Number(cur) ? acc = cur : acc, choice[0]); // 1
    const right = choice.reduce((acc,cur)=> Number(acc) < Number(cur) ? acc = cur : acc, choice[0]); // 4
    return Number(left) < Number(right) ? left + ' ' + right : right + ' ' + left;
}