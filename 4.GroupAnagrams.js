// https://neetcode.io/problems/anagram-groups/question?list=neetcode150

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */

  getHashedKey(s) {
    let freqArray = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      ++freqArray[s.charCodeAt(i) - 97];
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key += "#" + freqArray[k];
    }
    return key;
  }

  groupAnagrams(strs) {
    let map = {};
    for (let s of strs) {
      const key = this.getHashedKey(s);
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(s);
    }
    return Object.values(map);
  }
}
