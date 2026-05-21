// https://neetcode.io/problems/find-median-in-a-data-stream

class MedianFinder {
  constructor() {
    this.smallHalf = new MaxPriorityQueue();
    this.largeHalf = new MinPriorityQueue();
  }

  addNum(num) {
    if (this.largeHalf.isEmpty() || num > this.largeHalf.front()) {
      this.largeHalf.enqueue(num);
    } else {
      this.smallHalf.enqueue(num);
    }

    if (this.smallHalf.size() > this.largeHalf.size() + 1) {
      this.largeHalf.enqueue(this.smallHalf.dequeue());
    } else if (this.largeHalf.size() > this.smallHalf.size() + 1) {
      this.smallHalf.enqueue(this.largeHalf.dequeue());
    }
  }

  findMedian() {
    if (this.smallHalf.size() > this.largeHalf.size()) {
      return this.smallHalf.front();
    } else if (this.largeHalf.size() > this.smallHalf.size()) {
      return this.largeHalf.front();
    } else {
      return (this.smallHalf.front() + this.largeHalf.front()) / 2.0;
    }
  }
}
