function solution(s) {
    if(s.length === 4 || s.length === 6){
       if(isNaN(s)){
           return false;
       } else {
           return true;
       }
       // return [...s].every(num=> !isNaN(num)) // 모든 요소가 true면 리턴
    } else {
        return false;
    }
}