// https://neetcode.io/problems/balanced-binary-tree

class Solution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isBalanced(root) {
    let ans = true;
    function calcHt(curr) {
      if (!curr) return 0;

      let leftHt = calcHt(curr.left);
      let rightHt = calcHt(curr.right);
      if (Math.abs(leftHt - rightHt) > 1) {
        ans = false;
      }
      return 1 + Math.max(leftHt, rightHt);
    }
    calcHt(root);
    return ans;
  }
}
