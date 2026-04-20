// https://neetcode.io/problems/max-water-container/question

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;

    let maxWater = 0;

    while (left < right) {
      let area = Math.min(heights[left], heights[right]) * (right - left);
      maxWater = Math.max(area, maxWater);

      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxWater;
  }
}
