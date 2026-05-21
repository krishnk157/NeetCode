// https://neetcode.io/problems/kth-largest-element-in-an-array/

class Solution {
  findKthLargest(nums, k) {
    let minHeap = new MinPriorityQueue();

    for (let n of nums) {
      minHeap.push(n);
      if (minHeap.size() > k) {
        minHeap.pop();
      }
    }
    return minHeap.front();
  }
}
