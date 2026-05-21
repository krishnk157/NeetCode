// https://neetcode.io/problems/k-closest-points-to-origin/

class Solution {
  kClosest(points, k) {
    let minHeap = new MaxPriorityQueue((x) => x.dist);
    for (let [x, y] of points) {
      let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      minHeap.push({ val: [x, y], dist });
      if (minHeap.size() > k) {
        minHeap.pop();
      }
    }

    return minHeap.toArray().map((x) => x.val);
  }
}
