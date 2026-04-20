// https://neetcode.io/problems/trapping-rain-water/question

class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    const n = height.length;
    const leftMax = new Array(n);
    const rightMax = new Array(n);

    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];

    // find left max array
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    //find right max
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    //Calculating maxWater
    let maxWater = 0;
    for (let i = 0; i < n; i++) {
      maxWater += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return maxWater;
  }
}
