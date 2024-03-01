function solution(n) {
    //     var num = 0;
    //     var answer = 0;
    //     var text = 'odd';
        
        
    //     if(n%2==0) {
    //         text = 'even';
    //         num = 0;
    //     } else {
    //         text = 'odd';
    //         num = -1;
    //     }
    //     for( let i = 0; num+2 <= n; i++){
    //         if(text == 'even'){
    //             // n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합
    //             num += 2; 
    //             answer += Math.pow(num, 2);
    //             console.log(num, answer);
    //         } else {
    //             // n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합
    //             num += 2;
    //             answer += num; 
    //             console.log(num, answer);
    //         }
    //     }
        
        var answer = 0;
        if(n%2!=0){ // 홀수라면
            for(var i = 1; i <= n; i+=2) 
                answer += i;
        } else{ // 짝수라면
            for(var i = 2; i <= n; i+=2) 
                answer += Math.pow(i,2);
        }
        return answer;
    }