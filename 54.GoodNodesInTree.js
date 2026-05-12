// https://neetcode.io/problems/count-good-nodes-in-binary-tree

class Solution {
  goodNodes(root) {
    let count = 0;
    if (!root) return count;

    function traverse(curr, maxVal) {
      if (!curr) return;
      if (curr.val >= maxVal) {
        count++;
        maxVal = curr.val;
      }
      curr.left && traverse(curr.left, maxVal);
      curr.right && traverse(curr.right, maxVal);
    }
    traverse(root, root.val);
    return count;
  }
}
