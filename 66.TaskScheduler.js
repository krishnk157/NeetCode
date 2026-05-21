// https://neetcode.io/problems/task-scheduling/

class Solution {
  leastInterval(tasks, n) {
    let freq = new Array(26).fill(0);
    let maxFreq = 0;
    let len = tasks.length;
    for (let i = 0; i < len; i++) {
      let idx = tasks[i].charCodeAt(0) - 65;
      freq[idx]++;
      maxFreq = Math.max(maxFreq, freq[idx]);
    }

    let countOfMaxFreq = 0;
    for (let i = 0; i < 26; i++) {
      if (freq[i] === maxFreq) {
        countOfMaxFreq++;
      }
    }
    let frame = (n + 1) * (maxFreq - 1) + countOfMaxFreq;
    return Math.max(len, frame);
  }
}
