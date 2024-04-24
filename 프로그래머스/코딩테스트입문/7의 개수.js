function solution(array) {
    var answer = 0;
    for(let i of array){
        for(let j=0; j<i.toString().length; j++){
            if(Number(i.toString().split("")[j]) === 7) answer += 1;
        }
    }
    return answer;
}