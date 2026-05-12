// https://neetcode.io/problems/lowest-common-ancestor-in-binary-search-tree

class Solution {
  lowestCommonAncestor(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
      return this.lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
      return this.lowestCommonAncestor(root.right, p, q);
    } else {
      return root;
    }
  }
}
