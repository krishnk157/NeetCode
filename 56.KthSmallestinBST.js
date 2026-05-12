// https://neetcode.io/problems/kth-smallest-integer-in-bst

class Solution {
  kthSmallest(root, k) {
    let sortedArr = [];

    function traverse(curr) {
      if (!curr) return;
      traverse(curr.left);
      sortedArr.push(curr.val);
      traverse(curr.right);
    }
    traverse(root);
    return sortedArr[k - 1];
  }
}
