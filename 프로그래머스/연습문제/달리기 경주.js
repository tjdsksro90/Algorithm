function solution(players, callings) {
    const playerList = {};
    
    // players idex를 미리 저장
    for ( let i = 0; i < players.length; i++ ) {
        playerList[players[i]] = i;
        // console.log(playerList)
    }
    
    for ( let j = 0; j < callings.length; j++ ) {
        const call = playerList[callings[j]]; // 불린애
        // console.log(call);
        const pick = players[call-1]; // 잡을애
        // console.log(pick);
        
        // 해당 idex와 이전 index를 체인지
        players[call-1] = callings[j];
        players[call] = pick;
        
        // playerList의 index 갱신
        playerList[callings[j]] = call - 1;
        playerList[pick] = call;
    }
    
    return players;
}