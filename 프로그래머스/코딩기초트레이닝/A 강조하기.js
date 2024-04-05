function solution(myString) {
    let answer = [...myString.toLowerCase()];
    let result = '';
    for(let i of answer){
        if(i.includes('a')) result += 'A'
        else result += i;
    }
    return result;
}