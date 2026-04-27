// https://neetcode.io/problems/time-based-key-value-store/question

class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    const arr = this.keyStore.get(key) || [];

    let res = [];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      let m = left + Math.floor((right - left) / 2);
      if (arr[m][0] <= timestamp) {
        res = arr[m][1];
        left = m + 1;
      } else {
        right = m - 1;
      }
    }
    return res;
  }
}
