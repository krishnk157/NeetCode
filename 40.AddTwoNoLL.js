// https://neetcode.io/problems/add-two-numbers

class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let res = new ListNode();
    let curr = res;
    let carry = 0;
    while (l1 || l2 || carry) {
      let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
      carry = Math.floor(sum / 10);
      let resVal = sum % 10;
      let newresNode = new ListNode(resVal);
      curr.next = newresNode;
      curr = curr.next;
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
    return res.next;
  }
}
