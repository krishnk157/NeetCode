// https://neetcode.io/problems/kth-largest-integer-in-a-stream/

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinPriorityQueue();
    for (let n of nums) {
      this.add(n);
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.heap.push(val);

    if (this.heap.size() > this.k) {
      this.heap.pop();
    }

    return this.heap.front();
  }
}
