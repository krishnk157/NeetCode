// https://neetcode.io/problems/search-2d-matrix/question

class Solution {
  searchMatrix(matrix, target) {
    let r = matrix.length,
      c = matrix[0].length;
    let left = 0;
    right = r * c - 1; // consider entire matrix as one big sorted array

    while (left <= right) {
      let m = left + Math.floor((right - left) / 2);
      let row = Math.floor(m / c),
        col = m % c; // get actual row,col of element in matrix
      if (target > matrix[row][col]) {
        left = m + 1;
      } else if (target < matrix[row][col]) {
        right = m - 1;
      } else {
        return true;
      }
    }
    return false;
  }
}
