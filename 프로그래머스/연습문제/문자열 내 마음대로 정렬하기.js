function solution(strings, n) {
    // 문자열 앞 n 해당 문자 붙이기
    for (let i=0; i < strings.length; i++) strings[i] = strings[i][n] + strings[i];
    
    // 문자 정렬
    strings.sort();
    
    // 앞 글자 제거 후 다시 할당
    for(let j = 0; j < strings.length; j ++) strings[j] = strings[j].replace(strings[j][0],"");
                             
    return strings;
}