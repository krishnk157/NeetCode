// https://neetcode.io/problems/daily-temperatures/question

class Solution {
  dailyTemperatures(temperatures) {
    const stack = [];
    const n = temperatures.length;
    const res = new Array(n).fill(0);

    stack.push(n - 1);
    for (let i = n - 2; i >= 0; i--) {
      while (stack.length) {
        let top = stack[stack.length - 1];
        if (temperatures[top] <= temperatures[i]) {
          stack.pop();
        } else {
          res[i] = top - i;
          break;
        }
      }

      stack.push(i);
    }
    return res;
  }
}
