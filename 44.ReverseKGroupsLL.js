// https://neetcode.io/problems/reverse-nodes-in-k-group/

class Solution {
  reverseKGroup(head, k) {
    //get length of the list
    let length = 0;
    let curr = head;
    while (curr) {
      length++;
      curr = curr.next;
    }

    curr = head;
    let prevGroupTail = null;
    let newHead = null;

    let groupCount = Math.floor(length / k);
    for (let i = 1; i <= groupCount; i++) {
      let reversedIndex = 0;
      let prev = null;
      let groupHead = curr; // will become tail after reverse
      while (reversedIndex < k) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        reversedIndex++;
      }

      // set new head (only once)
      if (newHead === null) {
        newHead = prev;
      }

      // connect previous group
      if (prevGroupTail !== null) {
        prevGroupTail.next = prev;
      }

      // connect current group's tail to next part
      groupHead.next = curr; // will update later if next part is reversed

      // move prevGroupTail
      prevGroupTail = groupHead;
    }

    return newHead ? newHead : head;
  }
}
