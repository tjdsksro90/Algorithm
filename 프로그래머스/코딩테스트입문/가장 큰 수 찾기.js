function solution(array) {
    var answer = [];
    const beforeArray = [];
    
    for(let j of array) beforeArray.push(j);
    
    const sortArray = array.sort((a,b)=>b-a);
    
    answer.push(sortArray[0])
    
    for(let i=0; i<sortArray.length; i++){
        if(beforeArray[i] === sortArray[0]) answer.push(i)
    }
    
    return answer;
}