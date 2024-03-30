function solution(sizes) {
    const stay = []
    let big = 0;
    let small = 0;
    
    for( let i = 0; i < sizes.length; i++){
        sizes[i][0] > sizes[i][1] ? stay.push(sizes[i][1]) : stay.push(sizes[i][0])
        stay[i] > small ? small = stay[i] : small // 작은 수 구하기
        for(let j = 0; j < 2; j++){
            sizes[i][j] > big ? big = sizes[i][j] : big // 큰 수 구하기
        }
    }
    
    return big * small;
}