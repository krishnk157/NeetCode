// https://neetcode.io/problems/three-integer-sum/question

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (nums[left] + nums[right] + nums[i] > 0) {
          right--;
        } else if (nums[left] + nums[right] + nums[i] < 0) {
          left++;
        } else {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
        }
      }
    }
    return res;
  }
}
