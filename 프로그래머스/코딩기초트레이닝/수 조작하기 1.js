function solution(n, control) {
    var result = n;
    [...control].forEach((num,idx) => {
        if(num == 'w') result += 1;
        else if(num == 's') result -= 1;
        else if(num == 'd') result += 10;
        else if(num == 'a') result -= 10;
    });
    console.log(result);
    return result;
}