function solution(arr) {
    let answer = 0
    let list = arr
    
    while(true) {
        // list에서 조건에 맞게 변환한 changeList
        const changeList = list.map(num => {
            if(num >= 50 && num%2 === 0) return num/2
            if(num < 50 && num%2 === 1) return num*2+1
            return num
        })
        // 이전 배열과 현재 배열 evenry로 모두 비교
        const sameList = list.every((num, idx) => num === changeList[idx])
        if(sameList) break
        answer+=1
        
        // 현재 배열을 이전 배열 변수에 저장함
        list = changeList
    }
    
    return answer
}