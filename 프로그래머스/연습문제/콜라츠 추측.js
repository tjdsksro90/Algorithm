function solution(num) {
    var answer = num;
    let count = 0;
    if(answer == 1) {
        return count = 0;
    }
    for(let i=0; i<=500; i++){
        if( answer == 1) return count;
        if( i == 500) {
            count = -1
            return count;
        }
      if(answer%2==0) {
            answer = answer / 2;
            count++
        } else { 
            answer = answer * 3 + 1
            count++
        }  
    }
    
    
    return count;
}