function solution(arr) {
    // var min = arr.reduce((a, b) => {
    //     return Math.min(a, b);
    // });
    // var answer = arr.filter((element) => element !== min);
    var answer = arr.filter((element) => element !== Math.min(...arr));
    
    
    if(answer.length == 0) answer = [-1];
    console.log(answer);
    return answer;
}