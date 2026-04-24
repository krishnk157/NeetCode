// https://neetcode.io/problems/longest-repeating-substring-with-replacement

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    let left = 0;
    let maxWindow = 0;
    let maxFreq = 0;

    const freqMap = new Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
      const index = s.charCodeAt(right) - 65;
      freqMap[index]++;
      maxFreq = Math.max(maxFreq, freqMap[index]);

      while (right - left + 1 - maxFreq > k) {
        freqMap[s.charCodeAt(left) - 65]--;
        left++;
      }

      maxWindow = Math.max(maxWindow, right - left + 1);
    }

    return maxWindow;
  }
}
