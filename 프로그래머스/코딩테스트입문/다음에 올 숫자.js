function solution(common) {
    if(common[1] / common[0] === common[2] / common[1]){
        return common[1] / common[0] * common[common.length-1]
    } 
    return common[1] - common[0] + common[common.length-1]
}