// https://neetcode.io/problems/linked-list-cycle-detection

class Solution {
  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head) {
    if (!head) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
      if (fast === null || fast.next === null) return false;

      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  }
}
