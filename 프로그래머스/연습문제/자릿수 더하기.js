function solution(n){
    
    var answer = 0;
    [...String(n)].map(num=> answer += Number(num));

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log(answer)

    return answer;
}