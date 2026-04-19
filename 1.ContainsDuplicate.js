// https://neetcode.io/problems/duplicate-integer/question?list=neetcode150

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const set = new Set();
    for (let x of nums) {
      if (set.has(x)) {
        return true;
      }
      set.add(x);
    }
    return false;
  }
}
