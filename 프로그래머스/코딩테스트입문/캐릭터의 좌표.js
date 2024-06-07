function solution(keyinput, board) {
  let answer = [0, 0];
  const x_board = board[0] / 2;
  const y_board = board[1] / 2;

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && answer[0] + 1 < x_board) answer[0]++;
    if (keyinput[i] === "left" && answer[0] - 1 > -x_board) answer[0]--;

    if (keyinput[i] === "up" && answer[1] + 1 < y_board) answer[1]++;
    if (keyinput[i] === "down" && answer[1] - 1 > -y_board) answer[1]--;
  }

  return answer;
}
