// https://neetcode.io/problems/validate-parentheses/question

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const pairMap = {
      "(": ")",
      "{": "}",
      "[": "]",
    };

    const stack = [];

    for (let c of s) {
      if (pairMap[c]) {
        stack.push(c);
      } else {
        let top = stack.pop();
        if (!top || c != pairMap[top]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
