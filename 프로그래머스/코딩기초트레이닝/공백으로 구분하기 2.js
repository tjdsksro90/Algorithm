function solution(my_string) {
    var answer = [];
    
    answer = my_string.split(' ').filter(function(item) {
     return item !== null && item !== undefined && item !== '';
    });
    
    return answer;
}