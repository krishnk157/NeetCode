// https://neetcode.io/problems/find-duplicate-integer

class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findDuplicate(nums) {
    // its is like a ll, since indices ppoint to each other // there'll be a loop
    let slow = 0;
    let fast = 0;

    // get to intersection of loop
    while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];
      if (slow === fast) break;
    }

    // start from begining, and intersection, they'll meet at the duplicate point
    let slow2 = 0;
    while (true) {
      slow = nums[slow];
      slow2 = nums[slow2];
      if (slow === slow2) return slow;
    }
  }
}
