// https://neetcode.io/problems/two-integer-sum/question?list=neetcode150

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let n = nums.length;

    const map = {}; // store indexes in map
    for (let i = 0; i < n; i++) {
      map[nums[i]] = i;
    }

    // find the pair
    for (let i = 0; i < n; i++) {
      let remaining = target - nums[i];
      if (map[remaining] && map[remaining] != i) {
        return [map[remaining], i];
      }
    }
  }
}
