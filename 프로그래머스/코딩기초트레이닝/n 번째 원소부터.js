function solution(num_list, n) {
    var answer = [];
    for( var i = 1; i <= num_list.length; i++){
        if(i >= n){
            answer.push(num_list[i-1]);            
        }
    }
    console.log(answer);
    return answer;
}