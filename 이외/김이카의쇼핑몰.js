// 문제 설명

// 김이카는 L이상 , R이하의 비용을 사용하여 예술품을 사갈 수 있는 경우의 수를 알고싶다.

// 김이카는 1<=a<=b<=N을 만족하는 임의의 정수 a,b를 뽑아 a번부터 b번까지의 모든 예술품을 구매하려 한다.

// N은 구간의 최대값을 말하고

// a와 b는 N의 구간사이이다.

// 예를 들어 

// <aside>
// 💡 const costs = [1,2,3,4,5]
// const length = 5 // 상품의 갯수
// const L = 5 // 최소 비용
// const R = 9 // 최대 비용
// 일 때 
// 김이카가 살 수 있는 경우의 수는 6개이다.

// </aside>


const Function = (costs, length, L, R) => {
    let count = 0;
    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = i; j < length; j++) {
            sum += costs[j];
            if (sum >= L && sum <= R) count++;
            if (sum > R) break; // 효율성을 위해 탈출 코드 
            console.log(j)
        }
    }
    return count;
}

console.log(Function([1, 2, 3, 4, 5], 5, 5, 9));