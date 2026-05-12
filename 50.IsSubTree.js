// https://neetcode.io/problems/subtree-of-a-binary-tree

class Solution {
  isSubtree(root, subRoot) {
    let hashRoot = this.serialize(root);
    let hashSubRoot = this.serialize(subRoot);
    return hashRoot.includes(hashSubRoot);
  }

  serialize(root) {
    let hash = "";
    function traverse(curr) {
      if (!curr) {
        hash += "_#";
        return;
      }
      hash += "_" + curr.val;
      traverse(curr.left);
      traverse(curr.right);
    }
    traverse(root);
    return hash;
  }
}
