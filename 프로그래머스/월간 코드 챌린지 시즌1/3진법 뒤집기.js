function solution(n) {
    var answer = [...n.toString(3)].reverse().join('');
    console.log(Number(answer.toString(10)))
    // console.log(typeof Number(answer).toString(3))
    console.log(typeof parseInt(answer, 3))
    return parseInt(answer, 3)
}