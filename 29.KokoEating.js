// https://neetcode.io/problems/eating-bananas/question

class Solution {
  /**
   * @param {number[]} piles
   * @param {number} h
   * @return {number}
   */
  minEatingSpeed(piles, h) {
    let l = 1;
    let r = Math.max(...piles);

    let timeToEat = (k) => {
      let sum = 0;
      for (let n of piles) {
        sum += Math.ceil(n / k);
      }
      return sum;
    };

    while (l < r) {
      let m = Math.floor((l + r) / 2);
      if (timeToEat(m) <= h) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    return l;
  }
}
