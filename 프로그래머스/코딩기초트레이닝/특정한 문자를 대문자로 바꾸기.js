function solution(my_string, alp) {
    var answer = '';
    var result = [];
    [...my_string].forEach((val, idx) => {
        if(val == alp) result.push(val.toUpperCase());
        else result.push(val);
    });
    answer = result.join('');
    return answer;
}