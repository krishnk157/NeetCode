// https://neetcode.io/problems/binary-tree-diameter

class Solution {
  diameterOfBinaryTree(root) {
    let maxD = 0;
    function findDepth(curr) {
      if (!curr) return 0;
      let leftDepth = findDepth(curr.left);
      let rightDepth = findDepth(curr.right);
      let diameter = leftDepth + rightDepth;
      maxD = Math.max(maxD, diameter);
      return 1 + Math.max(leftDepth, rightDepth);
    }
    findDepth(root);
    return maxD;
  }
}
