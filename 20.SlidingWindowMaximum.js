// https://neetcode.io/problems/sliding-window-maximum/question

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    const deq = [];
    const res = [];
    for (let j = 0; j < nums.length; j++) {
      while (deq.length && nums[j] >= nums[deq[deq.length - 1]]) {
        deq.pop();
      }
      deq.push(j);
      // remove indices outside window
      if (deq[0] <= j - k) {
        deq.shift();
      }

      if (j >= k - 1) {
        res.push(nums[deq[0]]);
      }
    }
    return res;
  }
}
