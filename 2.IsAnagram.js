// https://neetcode.io/problems/is-anagram/question?list=neetcode150

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    // get frequency of each char in s in map
    for (let x of s) {
      map[x] = map[x] ? ++map[x] : 1;
    }

    //subtract frequency of each car in t in map
    for (let x of t) {
      if (!map[x]) {
        return false;
      }
      --map[x];
    }
    return true;
  }
}
