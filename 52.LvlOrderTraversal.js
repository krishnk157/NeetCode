// https://neetcode.io/problems/level-order-traversal-of-binary-tree

class Solution {
  levelOrder(root) {
    if (!root) return [];

    let res = [];
    let q = [root];

    while (q.length) {
      let lvlArray = [];
      let lvlSize = q.length;
      for (let i = 0; i < lvlSize; i++) {
        let curr = q.shift();
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
        lvlArray.push(curr.val);
      }
      res.push(lvlArray);
    }
    return res;
  }
}
