// https://neetcode.io/problems/same-binary-tree

class Solution {
  isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;

    return (
      p.val === q.val &&
      this.isSameTree(p.left, q.left) &&
      this.isSameTree(p.right, q.right)
    );
  }
}
