// https://neetcode.io/problems/merge-k-sorted-linked-lists

class Solution {
  /**
   * @param {ListNode[]} lists
   * @return {ListNode}
   */
  mergeKLists(lists) {
    let k = lists.length;
    if (k === 0) return null;
    let res = lists[0];
    for (let i = 1; i < k; i++) {
      res = this.merge(res, lists[i]);
    }
    return res;
  }

  merge(l1, l2) {
    if (!l1 || !l2) return l1 || l2;

    let dummyNode = new ListNode();
    let currList = dummyNode;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        currList.next = l1;
        l1 = l1.next;
      } else {
        currList.next = l2;
        l2 = l2.next;
      }
      currList = currList.next;
    }
    currList.next = l1 || l2;
    return dummyNode.next;
  }
}
