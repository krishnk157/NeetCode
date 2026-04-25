// https://neetcode.io/problems/evaluate-reverse-polish-notation

class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = [];
    const map = {
      "+": (a, b) => b + a,
      "*": (a, b) => b * a,
      "-": (a, b) => b - a,
      "/": (a, b) => Math.trunc(b / a),
    };

    for (let c of tokens) {
      if (!map[c]) {
        stack.push(+c);
      } else {
        let a = stack.pop();
        let b = stack.pop();
        let res = map[c](a, b);
        stack.push(res);
      }
    }
    return Number(stack.pop());
  }
}
