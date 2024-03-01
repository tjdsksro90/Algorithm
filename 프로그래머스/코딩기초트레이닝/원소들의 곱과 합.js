function solution(num_list) {
    var answer = 0;
    var testA = num_list.reduce((a,b)=>(a*b));
    var testB = num_list.reduce((a,b)=>(a+b));
    var testBB = Math.pow(testB, 2);
    if(testA < testBB){
        answer = 1;
    }
    return answer;
}