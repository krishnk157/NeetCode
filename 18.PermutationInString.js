// https://neetcode.io/problems/permutation-string/question

class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    let hash1 = new Array(26).fill(0);
    let hash2 = new Array(26).fill(0);

    const ws = s1.length;

    for (let i = 0; i < ws; i++) {
      hash1[s1.charCodeAt(i) - 97]++;
      hash2[s2.charCodeAt(i) - 97]++;
    }

    let left = 0,
      right = ws - 1;
    while (right < s2.length) {
      if (this.isHashSame(hash1, hash2)) {
        return true;
      }
      hash2[s2.charCodeAt(left) - 97]--;
      left++;
      right++;
      if (right < s2.length) {
        hash2[s2.charCodeAt(right) - 97]++;
      }
    }
    return false;
  }

  isHashSame(hash1, hash2) {
    for (let i = 0; i < 26; i++) {
      if (hash1[i] !== hash2[i]) {
        return false;
      }
    }
    return true;
  }
}
