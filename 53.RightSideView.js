// https://neetcode.io/problems/binary-tree-right-side-view

class Solution {
  rightSideView(root) {
    if (!root) return [];
    let res = [];
    let q = [root];
    while (q.length) {
      let rightNodeVal;
      let lvlSize = q.length;
      for (let i = 0; i < lvlSize; i++) {
        let curr = q.shift();
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
        rightNodeVal = curr.val;
      }
      res.push(rightNodeVal);
    }
    return res;
  }
}
