// https://neetcode.io/problems/valid-binary-search-tree

class Solution {
  isValidBST(root) {
    function validate(curr, min, max) {
      if (!curr) return true;
      if (curr.val <= min || curr.val >= max) return false;
      return (
        validate(curr.left, min, curr.val) &&
        validate(curr.right, curr.val, max)
      );
    }
    return validate(root, -Infinity, Infinity);
  }
}
