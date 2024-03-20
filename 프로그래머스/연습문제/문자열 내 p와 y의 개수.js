function solution(s){
    var answer = true;
    var lower = s.toLowerCase();
    var list = [...lower];
    var result = {};
    
    list.forEach((e)=> {
        if(result[e])	{
            result[e] = result[e] + 1;
        } else {
            result[e] = 0 + 1;
        }
    });
    
    if(result['p'] != result['y']) answer = false;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(result, result['p'])

    return answer;
}