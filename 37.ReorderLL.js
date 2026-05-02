// https://neetcode.io/problems/reorder-linked-list/question

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   */
  reorderList(head) {
    // Reverse 2nd half of the list

    // find the 2nd half
    let slow = head;
    let fast = head.next;
    while (fast != null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    //Reverse the 2nd half
    let second = slow.next;
    let prev = (slow.next = null);
    while (second !== null) {
      let tmp = second.next;
      second.next = prev;
      prev = second;
      second = tmp;
    }

    // now combine the two halves
    let first = head;
    second = prev;
    while (second !== null) {
      const tmp1 = first.next;
      const tmp2 = second.next;
      first.next = second;
      second.next = tmp1;
      first = tmp1;
      second = tmp2;
    }
  }
}
