function solution(s){
    let bracket = s.replaceAll('()','');
    
    while(true){
        if(!bracket.includes('()') ) break;
        else bracket = bracket.replaceAll('()','')
    }
    
    return bracket.length === 0 ? true : false;
    
//     let bracket = 0;
//     for(let i=0; i<s.length; i++){
//         if(s[i] === '(') bracket++
//         else bracket--
        
//         console.log(bracket)
//         if(bracket<0) return false;
//     }
    
//     return bracket === 0 ? true : false;
    
}