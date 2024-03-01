function solution(num_list) {
    var answer = 0;
    let even = 0;
    let odd = 0;
    
    num_list.forEach((num, idx) => {
        if ( idx % 2 == 0 ) even += num;
        else odd += num;
        
        even > odd ? answer = even : answer = odd;
    });
    
    return answer;
}