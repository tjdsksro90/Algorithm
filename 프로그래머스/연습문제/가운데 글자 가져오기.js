function solution(s) {
    var answer = '';
    let check = false;
    let number = 0;
    s.length%2 == 0 ? check = true : check = false;
    if(check){
        number = Math.ceil(s.length/2);
        answer = [...s][number -1] + [...s][number]
    } else {
        number = Math.ceil(s.length/2);
        answer = [...s][number - 1]
    }
    return answer;
}