// https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode150
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

    // get the frequency of every element
    const freqMap = {};

    for (let n of nums) {
      freqMap[n] = (freqMap[n] || 0) + 1;
    }

    //Add elements to min pq
    const pq = new MinPriorityQueue((x) => x.freq);
    for (let key in freqMap) {
      pq.enqueue({ value: key, freq: freqMap[key] });
      if (pq.size() > k) {
        // smaller frequencies popped, only top k frequencies remain
        pq.pop();
      }
    }

    return pq.toArray().map((x) => x.value);
  }
}
