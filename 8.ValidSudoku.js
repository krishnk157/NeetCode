// https://neetcode.io/problems/valid-sudoku/question

class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    // Check for all rows
    for (let row = 0; row < 9; row++) {
      const rowSet = new Set();
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === ".") continue;
        if (rowSet.has(board[row][i])) return false;
        rowSet.add(board[row][i]);
      }
    }

    //Check for all Cols
    for (let col = 0; col < 9; col++) {
      const colSet = new Set();
      for (let i = 0; i < 9; i++) {
        if (board[i][col] === ".") continue;
        if (colSet.has(board[i][col])) return false;
        colSet.add(board[i][col]);
      }
    }

    //Check for 3x3 grids
    for (let square = 0; square < 9; square++) {
      const gridSet = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const row = Math.floor(square / 3) * 3 + i;
          const col = (square % 3) * 3 + j;

          if (board[row][col] === ".") continue;
          if (gridSet.has(board[row][col])) return false;
          gridSet.add(board[row][col]);
        }
      }
    }
    return true;
  }
}
