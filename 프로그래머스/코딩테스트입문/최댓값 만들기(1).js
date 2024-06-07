function solution(numbers) {
    //     let answer = numbers.reduce((acc,cur)=>acc > cur ? acc:cur)
    //     let answer2 = numbers.filter(item=>item != answer);
    //     let answer3 = answer2.reduce((acc,cur)=>acc > cur ? acc:cur)
        
    //     return answer * answer3;
        numbers.sort((a,b)=>b-a);
        return numbers[0] * numbers[1]
    }