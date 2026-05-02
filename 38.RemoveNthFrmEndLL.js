// https://neetcode.io/problems/remove-node-from-end-of-linked-list/question

class Solution {
  /**
   * @param {ListNode} head
   * @param {number} n
   * @return {ListNode}
   */
  removeNthFromEnd(head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    for (let i = 0; i < n; i++) {
      first = first.next;
    }

    let second = dummy;
    while (first.next) {
      second = second.next;
      first = first.next;
    }
    second.next = second.next.next;

    return dummy.next;
  }
}
