function solution(num_list) {
    var answer = 0;
    let odd = '';
    let even = '';
    
    for( let i = 0; i < num_list.length; i++ ){
        if([...num_list][i] % 2 == 0) odd += [...num_list][i];
        else even += [...num_list][i];
    }
    
    return answer = Number(odd) + Number(even);
}