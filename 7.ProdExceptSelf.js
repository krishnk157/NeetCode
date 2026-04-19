// https://neetcode.io/problems/products-of-array-discluding-self/question

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const n = nums.length;
    let res = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
      res[i] = res[i - 1] * nums[i - 1]; // computing the prefix product
    }

    let post = 1;
    for (let i = n - 1; i >= 0; i--) {
      res[i] *= post; // result is prefix * postfix
      post *= nums[i]; // postfix product
    }

    return res;
  }
}
