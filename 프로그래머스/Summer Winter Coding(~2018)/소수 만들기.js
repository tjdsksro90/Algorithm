function solution(nums) {
    let answer = 0;
    let sum = 0;
    
    for( let i=0; i<nums.length; i++){
        for( let j=i+1; j<nums.length; j++){
            for ( let k=j+1; k<nums.length; k++){
                // 숫자 3개씩만 더하기
                if(
                    nums[i] !== nums[j] &&
                    nums[j] !== nums[k] &&
                    nums[k] !== nums[i]
                ) {
                    sum = nums[i] + nums[j] + nums[k]
                }
                // 소수 판별
                if(isPrime(sum)) answer += 1;
            }
        }
    }
    
    return answer;
}

function isPrime(num) {
    if(num === 1) return false; 
 	// Math.sqrt 함수를 사용하여 제곱근까지만 반복하도록 한다.
 	for(let i = 2; i <= Math.sqrt(num); i++) {
  		if(num % i === 0) return false;
	} 
    return true; 
}
