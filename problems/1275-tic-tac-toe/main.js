const tictactoe = function(moves) {
  const game = [[], [], []];
  // populate the board
  for (let i = 0; i < moves.length; ++i) {
    const [x, y] = moves[i];
    game[x][y] = i % 2 === 0 ? 'A' : 'B';
  }
  let val;
  for (let i = 0; i < 3; i++) {
    if (game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
      val = game[i][0];
      break;
    }
    if (game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
      val = game[0][i];
    }
  }
  // check for diagonals
  if (game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
    val = game[0][0];
  }
  if (game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
    val = game[0][2];
  }
  return val ? val : moves.length === 9 ? 'Draw' : 'Pending';
};
