function solution(s) {
    let arr = [...s]
    let targetList = []
    let wrongList = []
    let count = 0;
    
    for(let target of arr) {
        if(targetList.length === wrongList.length) {
            targetList = []
            wrongList = []
            targetList.push(target)
            count++
        } else {
            if(targetList[0] === target) {
                targetList.push(target)
            } else {
                wrongList.push(target)
            }
        }
    }
    
    return count
}