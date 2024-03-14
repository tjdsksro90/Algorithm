function solution(s) {
    let num = [0,1,2,3,4,5,6,7,8,9]
    let word = ['zero','one','two', 'three','four','five','six','seven','eight','nine']
    // for( let i=0; i<=50; i++){
    //     if(s.includes(word[i])){
    //         s = s.replaceAll(word[i], num[i])
    //     } 
    // }
    
    word.forEach((val,idx)=>s=s.replaceAll(val,idx));
    return Number(s);
}