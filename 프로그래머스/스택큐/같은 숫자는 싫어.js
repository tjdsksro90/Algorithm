function solution(arr)
{
    var answer = [];

    // arr.forEach(item=>{
    //     if(!answer.includes(item)) answer.push(item)
    // })
    for( let i=0; i<arr.length; i++){
        if(answer[answer.length - 1] !== arr[i]){
            answer.push(arr[i])
        }
    }
    
    return answer;
}