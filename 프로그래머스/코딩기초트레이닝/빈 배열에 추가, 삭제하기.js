function solution(arr, flag) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        if(flag[i]){
            for(let j = 0; j < arr[i] * 2; j++){
                answer.push(arr[i])
            }
        } else {
            answer.splice(-arr[i])
        }
    }
    return answer;
}
