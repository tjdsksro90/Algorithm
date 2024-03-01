function solution(n_str) {
    var answer = '';
    let num = false;
    
    [...n_str].filter(function(item){
        if(item != 0 || num) {
            answer += item;
            num = true;
        }
    });
    
    return answer;
}