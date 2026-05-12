//  https://neetcode.io/problems/binary-tree-from-preorder-and-inorder-traversal

class Solution {
  buildTree(preorder, inorder) {
    let inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
      inorderMap.set(inorder[i], i);
    }

    let preIndex = 0;
    function helper(left, right) {
      if (left > right) return null;

      let rootVal = preorder[preIndex++];
      let mid = inorderMap.get(rootVal);
      let root = new TreeNode(rootVal);
      root.left = helper(left, mid - 1);
      root.right = helper(mid + 1, right);
      return root;
    }

    return helper(0, inorder.length - 1);
  }
}
