function solution(arr, k) {
    var answer = [];
    if(k%2 === 0){
        // 짝수 더하기
        arr.forEach((value, index) => {
            answer.push(arr[index] + k);
        });
    } else {
        // 홀수 곱하기
        arr.forEach((value, index) => {
            answer.push(arr[index] * k);
        });
    }
    return answer;
}