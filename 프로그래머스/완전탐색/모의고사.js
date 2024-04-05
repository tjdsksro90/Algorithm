function solution(answers) {
    let answer = []; // 최고 점수인 리스트
    let num1 = [1, 2, 3, 4, 5]; 
    let num2 = [2, 1, 2, 3, 2, 4, 2, 5]; 
    let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let mathHater1 = 0; 
    let mathHater2 = 0; 
    let mathHater3 = 0; 
    let tempArray = [];
    let bestNum = 0;
    
    for( let i=0; i<answers.length; i++){
        if(answers[i]===num1[ i % num1.length]) mathHater1 += 1;
        if(answers[i]===num2[ i % num2.length]) mathHater2 += 1;
        if(answers[i]===num3[ i % num3.length]) mathHater3 += 1;
    }
    
    tempArray.push(mathHater1)
    tempArray.push(mathHater2)
    tempArray.push(mathHater3)
    
    bestNum = Math.max(...tempArray)
    
    tempArray.forEach((e,i)=>{ // e: 3개의 맞친 갯수, i: index
        if(e === bestNum) answer.push(i+1)
    })


    return answer;
}