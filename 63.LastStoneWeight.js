// https://neetcode.io/problems/last-stone-weight

class Solution {
  lastStoneWeight(stones) {
    let maxHeap = new MaxPriorityQueue();
    for (let s of stones) {
      maxHeap.push(s);
    }

    while (maxHeap.size() > 1) {
      let x = maxHeap.pop();
      let y = maxHeap.pop();

      if (x === y) continue;
      if (x < y) maxHeap.push(y - x);
      else maxHeap.push(x - y);
    }

    return maxHeap.size() ? maxHeap.front() : 0;
  }
}
