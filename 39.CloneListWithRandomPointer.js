// https://neetcode.io/problems/copy-linked-list-with-random-pointer/question

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    let map = new Map();
    map.set(null, null); // handles edge cases
    let curr = head;
    while (curr) {
      const newNode = new Node(curr.val);
      map.set(curr, newNode);
      curr = curr.next;
    }

    curr = head;
    while (curr) {
      let node = map.get(curr);
      node.next = map.get(curr.next);
      node.random = map.get(curr.random);
      curr = curr.next;
    }
    return map.get(head);
  }
}
