https://neetcode.io/problems/buy-and-sell-crypto/question

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let profit = 0;
      let minPrice = Infinity;
      for(let i=0; i<prices.length; i++)
      {
        minPrice = Math.min(minPrice, prices[i]);
        profit = Math.max(profit, prices[i] - minPrice);
      }
      return profit;
    }
}
