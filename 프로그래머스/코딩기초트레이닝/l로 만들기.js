function solution(myString) {
    const compared = 'abcdefghijk';
    let answer = '';
    [...myString].map((item)=>{
        compared.includes(item) ? answer += 'l' : answer += item
    })
    
    return answer;
}