// https://neetcode.io/problems/sliding-window-maximum/question

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(arr, k) {
    let res = [];
    let q = [];

    let i = 0,
      j = 0;
    while (j < arr.length) {
      while (q.length && arr[j] > q[q.length - 1]) {
        q.pop();
      }
      q.push(arr[j]);

      if (j >= k - 1) {
        res.push(q[0]);
        if (arr[i] == q[0]) q.shift(); //shrink window from left
        ++i;
      }
      ++j;
    }
    return res;
  }
}
