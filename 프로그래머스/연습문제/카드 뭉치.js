function solution(cards1, cards2, goal) {
    let cards1Idx = 0
    let cards2Idx = 0 
    let isBoolean = false  
    
    goal.forEach((word)=>{
        if(word === cards1[cards1Idx]) cards1Idx++
        else if(word === cards2[cards2Idx]) cards2Idx++
        else isBoolean = true
    })
    
    return isBoolean ? 'No' : 'Yes'
}