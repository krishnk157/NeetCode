// https://neetcode.io/problems/binary-tree-maximum-path-sum

class Solution {
  maxPathSum(root) {
    let maxSum = -Infinity;

    function traverse(curr) {
      if (!curr) return 0;
      let maxLeftSum = Math.max(0, traverse(curr.left));
      let maxRightSum = Math.max(0, traverse(curr.right));

      let currSum = curr.val + maxLeftSum + maxRightSum;

      maxSum = Math.max(maxSum, currSum);

      return curr.val + Math.max(maxLeftSum, maxRightSum);
    }

    traverse(root);
    return maxSum;
  }
}
