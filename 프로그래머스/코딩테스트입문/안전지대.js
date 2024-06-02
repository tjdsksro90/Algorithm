function solution(board) {
  let answer = 0;
  
  const bomb = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]] // 위험지역 좌표
  
  // 위험지역을 2로 표시
  // 0을 카운트
  for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[i].length; j++){
          if(board[i][j] === 1){
              bomb.map(area=>{
                  let [x, y] = area;
                  [x, y] = [x + i, y + j]
                  if( x >= 0 && x < board.length && y >= 0 && y < board[i].length && board[x][y] === 0){
                      board[x][y] = 2
                  } 
              })
          }
      }
  }
  
  board.map(v1 => v1.map(v2 => v2 === 0 ? answer++ : 0))
  
  return answer;
}